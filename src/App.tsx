import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Plus, ExternalLink, Target, Check, X, Loader2, RefreshCw, Send, Bot, Flame, ChevronRight, Link2, AlertCircle, Pencil, Trash2, Trophy, GitBranch, Code2, Star, GitFork, Library, Download } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { format, differenceInCalendarDays, parseISO, formatDistanceToNow } from 'date-fns';
import { db } from './firebase';
import { collection, getDocs, doc, setDoc, query, orderBy, limit } from 'firebase/firestore';
import { playClick, playSuccess } from './utils/sounds';
import { STRIVER_SHEET } from './data/striver';

// ─── Types ────────────────────────────────────────────────────────────────────
type Status = 'Todo' | 'Done' | 'Revisit';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface DSAProblem {
  id: string;
  title: string;
  topic: string;
  difficulty: Difficulty;
  status: Status;
  link?: string;
  createdAt: string;
  solvedAt?: string;
}

// Removed LocalRepo

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

interface LeetCodeStats {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
  ranking: number;
  submissionCalendar: Record<string, number>;
  fetchedAt: string;
}

interface ActivityLog {
  date: string; // yyyy-MM-dd
}

interface LeaderboardUser {
  id: string;
  displayName: string;
  githubUsername: string;
  leetcodeUsername: string;
  totalSolved: number;
  streak: number;
  score: number;
  updatedAt: string;
}

// ─── Storage helpers ──────────────────────────────────────────────────────────
function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// ─── Streak helper ────────────────────────────────────────────────────────────
function computeStreak(log: ActivityLog[]): number {
  if (!log.length) return 0;
  const today = format(new Date(), 'yyyy-MM-dd');
  const sorted = [...new Set(log.map((l) => l.date))].sort().reverse();
  if (sorted[0] !== today && sorted[0] !== format(new Date(Date.now() - 86400000), 'yyyy-MM-dd')) return 0;
  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const diff = differenceInCalendarDays(parseISO(sorted[i - 1]), parseISO(sorted[i]));
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

// ─── LeetCode API ─────────────────────────────────────────────────────────────
async function fetchLeetCodeStats(username: string): Promise<LeetCodeStats> {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile { ranking }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
        userCalendar(year: ${new Date().getFullYear()}) {
          submissionCalendar
        }
      }
      allQuestionsCount {
        difficulty
        count
      }
    }
  `;

  const res = await fetch('/leetcode-api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Referer: 'https://leetcode.com' },
    body: JSON.stringify({ query, variables: { username } }),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();

  if (!json.data?.matchedUser) throw new Error('User not found');

  const user = json.data.matchedUser;
  const acNums = user.submitStatsGlobal.acSubmissionNum as { difficulty: string; count: number }[];
  const allQ = json.data.allQuestionsCount as { difficulty: string; count: number }[];

  const get = (arr: { difficulty: string; count: number }[], d: string) =>
    arr.find((x) => x.difficulty === d)?.count ?? 0;

  return {
    username: user.username,
    totalSolved: get(acNums, 'All'),
    easySolved: get(acNums, 'Easy'),
    mediumSolved: get(acNums, 'Medium'),
    hardSolved: get(acNums, 'Hard'),
    totalQuestions: get(allQ, 'All'),
    ranking: user.profile.ranking ?? 0,
    submissionCalendar: JSON.parse(user.userCalendar?.submissionCalendar ?? '{}'),
    fetchedAt: new Date().toISOString(),
  };
}



// ─── Problem Topics API ───────────────────────────────────────────────────────
async function fetchProblemTopics(titleSlug: string): Promise<string> {
  const query = `query singleQuestionTopicTags($titleSlug: String!) { question(titleSlug: $titleSlug) { topicTags { name } } }`;
  try {
    const res = await fetch('/leetcode-api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Referer: 'https://leetcode.com' },
      body: JSON.stringify({ query, variables: { titleSlug } }),
    });
    if (!res.ok) return '';
    const json = await res.json();
    const tags = json.data?.question?.topicTags || [];
    return tags.map((t: { name: string }) => t.name).join(', ');
  } catch (error) {
    console.error('Failed to fetch topics:', error);
    return '';
  }
}

// ─── GitHub Repos API ─────────────────────────────────────────────────────────
async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch GitHub repos error:', error);
    return [];
  }
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <span className="font-mono text-[10px] text-primary-500 uppercase tracking-[0.3em]">{title}</span>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── Input ────────────────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary-500/50 transition-colors font-mono";
const selectCls = `${inputCls} cursor-pointer`;

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  // Config
  const [config, setConfig] = useState(() => load('app_config', {
    displayName: '',
    geminiApiKey: '',
    githubUsername: 'KrishBnsl',
    leetcodeSession: ''
  }));
  useEffect(() => { save('app_config', config); }, [config]);

  // Leaderboard
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // User Profile Modal
  const [selectedUser, setSelectedUser] = useState<LeaderboardUser | null>(null);
  const [selectedUserRepos, setSelectedUserRepos] = useState<GitHubRepo[]>([]);
  const [selectedUserLcStats, setSelectedUserLcStats] = useState<LeetCodeStats | null>(null);
  const [selectedUserLoading, setSelectedUserLoading] = useState(false);

  const openUserProfile = async (user: LeaderboardUser) => {
    setSelectedUser(user);
    setSelectedUserRepos([]);
    setSelectedUserLcStats(null);
    setSelectedUserLoading(true);
    
    try {
      const [repos, stats] = await Promise.all([
        user.githubUsername ? fetchGitHubRepos(user.githubUsername) : Promise.resolve([]),
        user.leetcodeUsername ? fetchLeetCodeStats(user.leetcodeUsername) : Promise.resolve(null)
      ]);
      setSelectedUserRepos(repos);
      setSelectedUserLcStats(stats);
    } catch (err) {
      console.error("Failed to load user profile", err);
    } finally {
      setSelectedUserLoading(false);
    }
  };

  // DSA problems
  const [problems, setProblems] = useState<DSAProblem[]>(() => load('dsa_problems', []));
  const [showAddProblem, setShowAddProblem] = useState(false);
  const [editingProblem, setEditingProblem] = useState<DSAProblem | null>(null);
  const [showChatbot, setShowChatbot] = useState(false);

  // GitHub Repos
  const [ghRepos, setGhRepos] = useState<GitHubRepo[]>([]);
  const [reposLoading, setReposLoading] = useState(false);

  // LeetCode
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(() => load('lc_stats', null));
  const [showLCModal, setShowLCModal] = useState(false);
  const [lcUsername, setLcUsername] = useState(() => load<string>('lc_username', ''));
  const [lcLoading, setLcLoading] = useState(false);
  const [lcError, setLcError] = useState('');
  const [lcSolvedProblems, setLcSolvedProblems] = useState<string[]>(() => load('lc_solved', []));
  const [lcSessionLoading, setLcSessionLoading] = useState(false);
  
  useEffect(() => { save('lc_solved', lcSolvedProblems); }, [lcSolvedProblems]);

  // Activity & streak
  const [activityLog, setActivityLog] = useState<ActivityLog[]>(() => load('activity_log', []));
  const streak = computeStreak(activityLog);

  // Persist on change
  useEffect(() => { save('dsa_problems', problems); }, [problems]);
  useEffect(() => { save('activity_log', activityLog); }, [activityLog]);

  const logActivity = useCallback(() => {
    const today = format(new Date(), 'yyyy-MM-dd');
    setActivityLog((prev) => {
      if (prev.some((l) => l.date === today)) return prev;
      return [...prev, { date: today }];
    });
  }, []);

  // Fetch GitHub repos on load or tab change
  const refreshRepos = useCallback(async () => {
    setReposLoading(true);
    const ghData = await fetchGitHubRepos(config.githubUsername || 'KrishBnsl');
    setGhRepos(ghData);
    setReposLoading(false);
  }, [config.githubUsername]);

  const fetchLeaderboard = useCallback(async () => {
    if (!db) return;
    setLeaderboardLoading(true);
    try {
      const q = query(collection(db, "users"), orderBy("score", "desc"), limit(100));
      const querySnapshot = await getDocs(q);
      const users: LeaderboardUser[] = [];
      querySnapshot.forEach((docSnap) => {
        users.push({ id: docSnap.id, ...docSnap.data() } as LeaderboardUser);
      });
      setLeaderboard(users);
    } catch (error) {
      console.error("Error fetching leaderboard", error);
    } finally {
      setLeaderboardLoading(false);
    }
  }, []);

  const publishProfile = async () => {
    if (!db || !config.githubUsername) return;
    setSyncing(true);
    try {
      const score = (lcStats?.totalSolved || 0) * 10 + streak * 50;
      const userRef = doc(db, "users", config.githubUsername.toLowerCase());
      await setDoc(userRef, {
        displayName: config.displayName || config.githubUsername,
        githubUsername: config.githubUsername,
        leetcodeUsername: lcUsername || '',
        totalSolved: lcStats?.totalSolved || 0,
        streak: streak,
        score: score,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      await fetchLeaderboard();
    } catch (error) {
      console.error("Error publishing profile", error);
    } finally {
      setSyncing(false);
    }
  };
  const syncLeetCodeHistory = async () => {
    if (!config.leetcodeSession) return;
    setLcSessionLoading(true);
    try {
      const res = await fetch('/api/leetcode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session: config.leetcodeSession })
      });
      if (!res.ok) throw new Error('Failed to fetch from LeetCode proxy');
      const data = await res.json();
      const questions = data?.data?.problemsetQuestionList?.questions || [];
      const solvedTitles = questions.map((q: any) => q.title);
      setLcSolvedProblems(solvedTitles);
      alert(`Successfully synced ${solvedTitles.length} solved problems!`);
    } catch (err) {
      console.error(err);
      alert('Failed to sync. Please ensure your LEETCODE_SESSION is valid.');
    } finally {
      setLcSessionLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'projects') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      refreshRepos();
    } else if (activeTab === 'leaderboard') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchLeaderboard();
    }
  }, [activeTab, refreshRepos, fetchLeaderboard]);


  // ── Problem actions ──────────────────────────────────────────────────────────
  const saveProblem = (p: Omit<DSAProblem, 'id' | 'createdAt'> & { id?: string; createdAt?: string }) => {
    if (p.id) {
      setProblems((prev) => prev.map((x) => (x.id === p.id ? { ...x, ...p } as DSAProblem : x)));
    } else {
      const newP: DSAProblem = {
        ...p,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      setProblems((prev) => [...prev, newP]);
    }
    logActivity();
    setShowAddProblem(false);
    setEditingProblem(null);
  };

  const deleteProblem = (id: string) => {
    setProblems((prev) => prev.filter((p) => p.id !== id));
  };

  const cycleProblemStatus = (id: string) => {
    setProblems((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const next: Status = p.status === 'Todo' ? 'Done' : p.status === 'Done' ? 'Revisit' : 'Todo';
        const solvedAt = next === 'Done' ? new Date().toISOString() : p.solvedAt;
        if (next === 'Done') {
          logActivity();
          playSuccess();
        }
        return { ...p, status: next, solvedAt };
      })
    );
  };

  // ── LeetCode connect ─────────────────────────────────────────────────────────
  const connectLeetCode = async () => {
    if (!lcUsername.trim()) return;
    setLcLoading(true);
    setLcError('');
    try {
      const stats = await fetchLeetCodeStats(lcUsername.trim());
      setLcStats(stats);
      save('lc_stats', stats);
      save('lc_username', lcUsername.trim());
      setShowLCModal(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch data';
      setLcError(message === 'User not found' ? 'User not found on LeetCode.' : `Error: ${message}. Try again.`);
    } finally {
      setLcLoading(false);
    }
  };

  const disconnectLeetCode = () => {
    setLcStats(null);
    setLcUsername('');
    save('lc_stats', null);
    save('lc_username', '');
  };

  const refreshLeetCode = async () => {
    if (!lcStats) return;
    setLcLoading(true);
    setLcError('');
    try {
      const stats = await fetchLeetCodeStats(lcStats.username);
      setLcStats(stats);
      save('lc_stats', stats);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Refresh failed';
      setLcError(message);
    } finally {
      setLcLoading(false);
    }
  };

  // ── Derived stats ────────────────────────────────────────────────────────────
  const solvedCount = problems.filter((p) => p.status === 'Done').length;
  const revisitCount = problems.filter((p) => p.status === 'Revisit').length;
  const priorityProblem = problems.find((p) => p.status === 'Todo') ?? problems.find((p) => p.status === 'Revisit');

  // ── Nav ─────────────────────────────────────────────────────────────────────
  const renderNavItem = (id: string, label: string) => (
    <button
      onClick={() => {
        if (activeTab !== id) playClick();
        setActiveTab(id);
      }}
      className={`text-left px-4 py-3 rounded-xl transition-all relative overflow-hidden font-mono text-xs uppercase tracking-widest ${
        activeTab === id
          ? 'text-white bg-white/5 border border-white/10'
          : 'text-zinc-600 hover:text-white hover:bg-white/5 border border-transparent'
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="opacity-50">{id === activeTab ? '>' : ':'}</span>
        {label}
      </div>
      {activeTab === id && <span className="absolute right-4 w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#050505] text-zinc-300 selection:bg-primary-500 selection:text-black font-sans relative overflow-hidden">
      {/* Animated Glowing Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary-900/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>
      {selectedUser && (
        <Modal title={`${selectedUser.displayName}'s Profile`} onClose={() => setSelectedUser(null)}>
          {selectedUserLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-primary-500 animate-spin mb-4" />
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Loading Profile...</p>
            </div>
          ) : (
            <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              {/* LeetCode Section */}
              <div>
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> LeetCode Stats
                </h3>
                {selectedUserLcStats ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border border-white/5 bg-[#0a0a0a] p-4 rounded-xl text-center">
                      <div className="text-2xl font-light text-white">{selectedUserLcStats.totalSolved}</div>
                      <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-1">Solved</div>
                    </div>
                    <div className="border border-white/5 bg-[#0a0a0a] p-4 rounded-xl text-center">
                      <div className="text-2xl font-light text-green-500">{selectedUserLcStats.easySolved}</div>
                      <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-1">Easy</div>
                    </div>
                    <div className="border border-white/5 bg-[#0a0a0a] p-4 rounded-xl text-center">
                      <div className="text-2xl font-light text-yellow-500">{selectedUserLcStats.mediumSolved}</div>
                      <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-1">Medium</div>
                    </div>
                    <div className="border border-white/5 bg-[#0a0a0a] p-4 rounded-xl text-center">
                      <div className="text-2xl font-light text-red-500">{selectedUserLcStats.hardSolved}</div>
                      <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-1">Hard</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-zinc-500 text-sm font-light italic bg-white/5 p-4 rounded-xl border border-white/5">
                    No LeetCode stats available.
                  </div>
                )}
              </div>

              {/* GitHub Section */}
              <div>
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <GitBranch className="w-4 h-4" /> Top GitHub Repos
                </h3>
                {selectedUserRepos.length > 0 ? (
                  <div className="space-y-3">
                    {selectedUserRepos.slice(0, 5).map(repo => (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="block border border-white/5 bg-[#0a0a0a] p-4 rounded-xl hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-primary-500 font-mono text-sm">{repo.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
                        </div>
                        {repo.description && (
                          <p className="text-zinc-400 text-xs font-light line-clamp-1 mb-3">{repo.description}</p>
                        )}
                        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                          {repo.language && <span>{repo.language}</span>}
                          <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stargazers_count}</span>
                          <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-zinc-500 text-sm font-light italic bg-white/5 p-4 rounded-xl border border-white/5">
                    No public repositories found.
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal>
      )}

      {showChatbot && (
        <ChatbotModal 
          apiKey={config.geminiApiKey || import.meta.env.VITE_GEMINI_API_KEY}
          solvedProblems={Array.from(new Set([
            ...problems.filter(p => p.status === 'Done').map(p => p.title),
            ...lcSolvedProblems
          ]))}
          onClose={() => setShowChatbot(false)} 
          onApprove={(suggestions) => {
            const newProblems: DSAProblem[] = suggestions.map((s: Record<string, unknown>) => ({
              id: crypto.randomUUID(),
              title: s.title as string,
              topic: (s.topic as string) || 'Uncategorized',
              difficulty: s.difficulty as Difficulty,
              status: 'Todo',
              link: s.slug ? `https://leetcode.com/problems/${s.slug}` : '',
              createdAt: new Date().toISOString(),
            }));
            setProblems(prev => [...prev, ...newProblems]);
            setShowChatbot(false);
          }}
        />
      )}
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {/* ── Sidebar ── */}
      <nav className="w-full md:w-[300px] border-b md:border-b-0 md:border-r border-white/[0.06] p-8 flex flex-col gap-10 flex-shrink-0 relative z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-sm font-mono tracking-[0.4em] text-white">PHASEPLANNER</h1>
          <span className="text-[9px] font-mono text-primary-500 border border-primary-500/30 px-2 py-1 uppercase tracking-widest rounded-sm">v2.0</span>
        </div>

        <div className="flex flex-col gap-1 z-10 w-full">
          {renderNavItem("dashboard", "Dashboard")}
          {renderNavItem("dsa", "DSA Log")}
          {renderNavItem("projects", "Projects")}
          {renderNavItem("leetcode", "LeetCode")}
          {renderNavItem("leaderboard", "Leaderboard")}
          {renderNavItem("curated", "Curated Sheets")}
          {renderNavItem("settings", "Settings")}
        </div>

        {/* Streak */}
        <div className="mt-auto border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md relative overflow-hidden group hover:border-primary-500/20 transition-colors rounded-2xl">
          <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] group-hover:text-primary-500/30">:STREAK</div>
          <div className="flex items-center gap-3 mb-4">
            <Flame className="w-4 h-4 text-primary-500" />
            <h3 className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 uppercase">Current Session</h3>
          </div>
          <p className="text-4xl font-light text-white mb-2">
            {streak} <span className="text-sm text-zinc-600 font-mono tracking-[0.2em] ml-1">DAYS</span>
          </p>
          <p className="text-[10px] font-mono text-zinc-600 mt-1">
            {activityLog.length} total active days
          </p>
          <div className="w-full h-px bg-white/10 mt-4 relative">
            <div className="absolute top-0 left-0 h-px bg-primary-500 shadow-[0_0_10px_rgba(204,255,0,0.5)]"
              style={{ width: `${Math.min((streak / 30) * 100, 100)}%` }} />
          </div>
        </div>

        {/* LeetCode mini-badge */}
        {lcStats && (
          <div className="border border-primary-500/20 bg-primary-500/5 p-4 rounded-xl flex items-center justify-between">
            <div>
              <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.2em] mb-1">LeetCode</div>
              <div className="font-mono text-sm text-primary-500">{lcStats.username}</div>
              <div className="font-mono text-[10px] text-zinc-400">{lcStats.totalSolved} solved</div>
            </div>
            <a href={`https://leetcode.com/${lcStats.username}`} target="_blank" rel="noreferrer"
              className="text-zinc-500 hover:text-primary-500 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-1 p-6 md:p-10 lg:p-14 overflow-y-auto relative z-10">
        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 border-b border-white/10 pb-6 gap-4">
          <div className="flex flex-wrap gap-8 font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <span className="text-primary-500/50">:VIEW</span>
              <span className="text-white">{activeTab}</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary-500/50">:DATE</span>
              <span className="text-white">{format(new Date(), 'dd.MM.yyyy')}</span>
            </span>
          </div>
          <div className="font-mono text-[10px] text-primary-500 tracking-[0.2em] uppercase flex items-center gap-3 bg-primary-500/10 px-4 py-2 border border-primary-500/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-[pulse_2s_ease-in-out_infinite]" />
            SYSTEM ONLINE
          </div>
        </header>

        <div className="max-w-5xl mx-auto">

          {/* ═══════════════════════ DASHBOARD ═══════════════════════ */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Priority Task */}
              <section className="col-span-1 lg:col-span-2 border border-white/5 bg-[#0a0a0a] p-8 relative group hover:border-white/10 transition-colors rounded-2xl">
                <div className="absolute top-0 right-0 p-5 font-mono text-[10px] text-primary-500/50 uppercase tracking-[0.2em]">:PRIORITY_TASK</div>
                {priorityProblem ? (
                  <>
                    <div className="mb-10 mt-4 space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[9px] font-mono px-2 py-1 rounded uppercase tracking-widest border ${
                          priorityProblem.status === 'Revisit' ? 'border-amber-500/30 text-amber-500 bg-amber-500/5' : 'border-zinc-600/30 text-zinc-500 bg-zinc-600/5'
                        }`}>{priorityProblem.status}</span>
                        <span className="text-[9px] font-mono text-zinc-600">{priorityProblem.topic}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-light text-white leading-tight">{priorityProblem.title}</h3>
                      <p className="text-sm text-zinc-500 font-light">{priorityProblem.difficulty} difficulty</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => cycleProblemStatus(priorityProblem.id)}
                        className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-black bg-primary-500 hover:bg-primary-400 px-6 py-3 transition-all hover:scale-[1.02] rounded-xl font-bold"
                      >
                        Mark Done <Check className="w-3.5 h-3.5" />
                      </button>
                      {priorityProblem.link && (
                        <a href={priorityProblem.link} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400 hover:text-primary-500 border border-white/10 hover:border-primary-500/30 px-6 py-3 transition-all rounded-xl">
                          Open <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Check className="w-10 h-10 text-primary-500 mb-4" />
                    <p className="text-white text-lg font-light">All caught up!</p>
                    <p className="text-zinc-500 text-sm mt-1">Add more problems in the DSA Log</p>
                  </div>
                )}
              </section>

              {/* Stats mini blocks */}
              <section className="flex flex-col gap-6">
                <div className="border border-white/5 bg-[#0a0a0a] p-8 flex flex-col items-center justify-center relative hover:border-white/10 transition-colors rounded-2xl text-center flex-1">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-5 font-mono text-[9px] text-zinc-600 uppercase tracking-[0.3em]">:SOLVED</div>
                  <span className="text-5xl font-light text-white mb-3 mt-4">{lcStats ? lcStats.totalSolved : solvedCount}</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary-500">Problems Completed</span>
                  {lcStats && <span className="font-mono text-[9px] text-zinc-600 mt-1">via LeetCode</span>}
                </div>
                <div className="border border-white/5 bg-[#0a0a0a] p-8 flex flex-col items-center justify-center relative hover:border-white/10 transition-colors rounded-2xl text-center flex-1">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-5 font-mono text-[9px] text-zinc-600 uppercase tracking-[0.3em]">:REVISIT</div>
                  <span className="text-5xl font-light text-white mb-3 mt-4">{revisitCount.toString().padStart(2, '0')}</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-amber-500 text-center">Require Attention</span>
                </div>
              </section>

              {/* Recent activity */}
              <section className="col-span-1 lg:col-span-3 border border-white/5 bg-[#0a0a0a] p-8 rounded-2xl">
                <div className="font-mono text-[10px] text-primary-500 uppercase tracking-[0.3em] mb-6">:RECENT_ACTIVITY</div>
                {problems.filter(p => p.status === 'Done' && p.solvedAt).slice(-5).reverse().length ? (
                  <div className="flex flex-wrap gap-3">
                    {problems.filter(p => p.status === 'Done' && p.solvedAt).slice(-5).reverse().map(p => (
                      <div key={p.id} className="border border-white/5 bg-black/40 rounded-xl px-4 py-3 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                        <span className="text-xs text-white font-light">{p.title}</span>
                        <span className={`text-[9px] font-mono ${
                          p.difficulty === 'Easy' ? 'text-primary-500' :
                          p.difficulty === 'Medium' ? 'text-amber-500' : 'text-rose-500'
                        }`}>{p.difficulty}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-zinc-600 text-sm font-light">No solved problems yet. Start solving!</p>
                )}
              </section>
            </div>
          )}

          {/* ═══════════════════════ DSA LOG ═══════════════════════ */}
          {activeTab === 'dsa' && (
            <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40">
                <div>
                  <div className="font-mono text-[11px] text-primary-500 uppercase tracking-[0.3em]">:PROBLEM_LOG</div>
                  <div className="font-mono text-[9px] text-zinc-600 mt-1">{problems.length} problems tracked</div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowChatbot(true)}
                    className="font-mono text-[10px] tracking-[0.2em] border border-primary-500/30 hover:border-primary-500 bg-primary-500/10 text-primary-500 px-5 py-2.5 uppercase transition-colors rounded-xl flex items-center gap-2"
                  >
                    <Bot className="w-3.5 h-3.5" /> Coach
                  </button>
                  <button
                    onClick={() => setShowAddProblem(true)}
                    className="font-mono text-[10px] tracking-[0.2em] bg-white text-black px-5 py-2.5 uppercase hover:bg-zinc-200 transition-colors rounded-xl flex items-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                {problems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4">
                      <Plus className="w-5 h-5 text-zinc-600" />
                    </div>
                    <p className="text-zinc-500 text-sm font-light">No problems yet. Add your first DSA problem!</p>
                  </div>
                ) : (
                  <table className="w-full text-sm text-left font-mono">
                    <thead className="text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
                      <tr>
                        <th className="px-6 py-5 font-normal">State</th>
                        <th className="px-6 py-5 font-normal">Title</th>
                        <th className="px-6 py-5 font-normal">Topic</th>
                        <th className="px-6 py-5 font-normal">Difficulty</th>
                        <th className="px-6 py-5 font-normal">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs text-zinc-300">
                      {problems.map((problem) => (
                        <tr key={problem.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                          <td className="px-6 py-4">
                            <button
                              onClick={() => cycleProblemStatus(problem.id)}
                              className="focus:outline-none transition-transform hover:scale-110 flex items-center justify-center"
                              title={`Status: ${problem.status} — click to cycle`}
                            >
                              {problem.status === 'Done' ? (
                                <div className="w-3.5 h-3.5 rounded-sm border border-primary-500 bg-primary-500/20 shadow-[0_0_10px_rgba(204,255,0,0.4)] relative">
                                  <div className="absolute inset-0 bg-primary-500 animate-ping opacity-20 rounded-sm" />
                                </div>
                              ) : problem.status === 'Revisit' ? (
                                <div className="w-3.5 h-3.5 rounded-sm border border-amber-500 bg-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
                              ) : (
                                <div className="w-3.5 h-3.5 rounded-sm border border-zinc-700 bg-black/50" />
                              )}
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="text-white/90 group-hover:text-primary-400 transition-colors font-sans">{problem.title}</span>
                              {problem.link && (
                                <a href={problem.link} target="_blank" rel="noreferrer"
                                  className="text-zinc-600 hover:text-primary-500 transition-colors">
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-zinc-500">{problem.topic}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 text-[9px] uppercase tracking-widest border rounded-md ${
                              problem.difficulty === 'Easy' ? 'border-primary-500/30 text-primary-500 bg-primary-500/5' :
                              problem.difficulty === 'Medium' ? 'border-amber-500/30 text-amber-500 bg-amber-500/5' :
                              'border-rose-500/30 text-rose-500 bg-rose-500/5'
                            }`}>
                              {problem.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => setEditingProblem(problem)}
                                className="text-zinc-600 hover:text-primary-500 transition-colors"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => deleteProblem(problem.id)}
                                className="text-zinc-600 hover:text-rose-500 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {/* ═══════════════════════ PROJECTS ═══════════════════════ */}
          {activeTab === 'projects' && (
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                <div>
                  <h2 className="text-3xl font-light text-white mb-2 font-sans tracking-wide">Repositories</h2>
                  <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">Showing public projects for {config.githubUsername}</p>
                </div>
                <button
                  onClick={refreshRepos}
                  disabled={reposLoading}
                  className="font-mono text-[10px] tracking-[0.2em] border border-white/10 hover:border-primary-500 hover:text-primary-500 text-zinc-400 px-4 py-2 uppercase transition-colors rounded-lg flex items-center gap-2 disabled:opacity-50"
                >
                  {reposLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />} Sync
                </button>
              </div>
              
              {reposLoading && ghRepos.length === 0 ? (
                <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl flex flex-col items-center justify-center py-24 text-center">
                  <Loader2 className="w-8 h-8 text-primary-500 animate-spin mb-4" />
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Fetching repositories...</p>
                </div>
              ) : (
                ghRepos.length === 0 ? (
                  <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl flex flex-col items-center justify-center py-24 text-center">
                    <p className="text-zinc-400 text-sm font-light mb-2">No GitHub repositories found.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ghRepos.map((repo) => (
                      <div key={repo.id} className="border border-white/5 bg-[#0a0a0a] p-8 relative hover:border-white/10 transition-colors group rounded-2xl overflow-hidden flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-light text-white tracking-wide font-sans mb-3 flex items-center gap-2 truncate">
                            {repo.name}
                          </h3>
                          <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-primary-500 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        
                        <p className="text-sm text-zinc-400 font-light line-clamp-2 mb-6 flex-grow">
                          {repo.description || "No description provided."}
                        </p>

                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5 text-[10px] font-mono text-zinc-500">
                          <div className="flex items-center gap-4">
                            {repo.language && (
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-primary-500/50"></span>
                                {repo.language}
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              ⭐ {repo.stargazers_count}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            Updated {formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          )}

          {/* ═══════════════════════ LEADERBOARD ═══════════════════════ */}
          {activeTab === 'leaderboard' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/5 pb-6 gap-4">
                <div>
                  <h2 className="text-3xl font-light text-white mb-2 font-sans tracking-wide">Global Leaderboard</h2>
                  <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">Ranked by LeetCode Solved & Active Streak</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={publishProfile}
                    disabled={syncing || !db || !config.githubUsername}
                    className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-black bg-primary-500 hover:bg-primary-400 px-6 py-2 transition-all rounded-lg font-bold disabled:opacity-50"
                  >
                    {syncing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trophy className="w-3.5 h-3.5" />}
                    Publish Profile
                  </button>
                  <button
                    onClick={fetchLeaderboard}
                    disabled={leaderboardLoading || !db}
                    className="font-mono text-[10px] tracking-[0.2em] border border-white/10 hover:border-primary-500 hover:text-primary-500 text-zinc-400 px-4 py-2 uppercase transition-colors rounded-lg flex items-center gap-2 disabled:opacity-50"
                  >
                    {leaderboardLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />} Sync
                  </button>
                </div>
              </div>

              {!db ? (
                <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl flex flex-col items-center justify-center py-24 text-center px-8">
                  <AlertCircle className="w-8 h-8 text-yellow-500 mb-4" />
                  <p className="text-zinc-400 text-sm font-light mb-2">Firebase is not configured.</p>
                  <p className="text-zinc-600 text-xs font-mono">Please add your Firebase config to .env to use the leaderboard.</p>
                </div>
              ) : leaderboardLoading && leaderboard.length === 0 ? (
                <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl flex flex-col items-center justify-center py-24 text-center">
                  <Loader2 className="w-8 h-8 text-primary-500 animate-spin mb-4" />
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Loading Leaderboard...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {leaderboard.map((user, idx) => (
                    <div 
                      key={user.id} 
                      onClick={() => openUserProfile(user)}
                      className="border border-white/5 bg-[#0a0a0a] p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-white/10 hover:bg-white/5 cursor-pointer transition-colors rounded-2xl gap-6"
                    >
                      <div className="flex items-center gap-6">
                        <div className="font-mono text-2xl font-light text-primary-500/50 w-8 text-center">
                          #{idx + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-light text-white mb-1 flex items-center gap-2">
                            {user.displayName}
                            {idx === 0 && <Trophy className="w-4 h-4 text-primary-500" />}
                          </h3>
                          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                            {user.githubUsername} {user.leetcodeUsername && `| LC: ${user.leetcodeUsername}`}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-8 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                        <div className="text-center">
                          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Score</div>
                          <div className="text-xl font-light text-primary-500">{user.score}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Solved</div>
                          <div className="text-xl font-light text-white">{user.totalSolved}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Streak</div>
                          <div className="text-xl font-light text-white flex items-center gap-1 justify-center">
                            <Flame className="w-3.5 h-3.5 text-primary-500" /> {user.streak}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {leaderboard.length === 0 && (
                     <div className="text-center py-12 text-zinc-500 font-mono text-xs uppercase tracking-widest">
                       No users on the leaderboard yet. Be the first to publish!
                     </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ═══════════════════════ SETTINGS ═══════════════════════ */}
          {activeTab === 'settings' && (
            <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl overflow-hidden max-w-2xl mx-auto">
              <div className="p-6 border-b border-white/5 bg-black/40">
                <div className="font-mono text-[11px] text-primary-500 uppercase tracking-[0.3em]">:CONFIGURATION</div>
                <div className="font-mono text-[9px] text-zinc-600 mt-1">Manage API keys and account details</div>
              </div>
              <div className="p-6 space-y-6">
                <Field label="Display Name">
                  <input
                    type="text"
                    value={config.displayName}
                    onChange={(e) => setConfig({ ...config, displayName: e.target.value })}
                    className={inputCls}
                    placeholder="Your public name on the leaderboard"
                  />
                  <div className="font-mono text-[9px] text-zinc-500 mt-1">This name will be displayed to other users.</div>
                </Field>
                <Field label="Gemini API Key">
                  <input
                    type="password"
                    value={config.geminiApiKey}
                    onChange={(e) => setConfig({ ...config, geminiApiKey: e.target.value })}
                    className={inputCls}
                    placeholder="AIzaSy..."
                  />
                  <div className="font-mono text-[9px] text-zinc-500 mt-1">Used for the AI Practice Coach. Requires a free Google AI Studio key.</div>
                </Field>
                <Field label="GitHub Username">
                  <input
                    type="text"
                    value={config.githubUsername}
                    onChange={(e) => setConfig({ ...config, githubUsername: e.target.value })}
                    className={inputCls}
                    placeholder="e.g. KrishBnsl"
                  />
                  <div className="font-mono text-[9px] text-zinc-500 mt-1">Used to fetch repositories in the Projects tab.</div>
                </Field>
                <div className="pt-4 border-t border-white/10">
                  <Field label="LeetCode Session Cookie">
                    <input
                      type="password"
                      value={config.leetcodeSession}
                      onChange={(e) => setConfig({ ...config, leetcodeSession: e.target.value })}
                      className={inputCls}
                      placeholder="LEETCODE_SESSION cookie value..."
                    />
                    <div className="font-mono text-[9px] text-zinc-500 mt-1 mb-3">Optional. Used exclusively to inform the AI Coach of your past solved problems.</div>
                    <button
                      onClick={syncLeetCodeHistory}
                      disabled={lcSessionLoading || !config.leetcodeSession}
                      className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-black bg-primary-500 hover:bg-primary-400 px-4 py-2 rounded-lg font-bold disabled:opacity-50 transition-colors"
                    >
                      {lcSessionLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
                      Sync History
                    </button>
                    {lcSolvedProblems.length > 0 && (
                      <div className="font-mono text-[9px] text-primary-500 mt-2">
                        {lcSolvedProblems.length} problems synced.
                      </div>
                    )}
                  </Field>
                </div>
                <div className="bg-primary-500/5 border border-primary-500/30 p-4 rounded-xl flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <p className="font-mono text-[10px] text-zinc-300">Settings are auto-saved to your browser's local storage.</p>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════ CURATED SHEETS ═══════════════════════ */}
          {activeTab === 'curated' && (
            <div className="space-y-6">
              <div className="mb-8 border-b border-white/5 pb-6">
                <h2 className="text-3xl font-light text-white mb-2 font-sans tracking-wide">Curated Sheets</h2>
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">Import community-favorite problem sets</p>
              </div>

              <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl overflow-hidden">
                <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-light text-white flex items-center gap-3">
                      <Library className="w-6 h-6 text-primary-500" />
                      Striver's SDE Sheet
                    </h3>
                    <p className="text-zinc-500 text-sm mt-2 max-w-xl">
                      A curated list of ~180 classic problems to ace top product-based company interviews. Import problems directly to your log.
                    </p>
                  </div>
                </div>
                
                <div className="divide-y divide-white/5">
                  {STRIVER_SHEET.map((topic) => {
                    const existingTitles = new Set([
                      ...problems.map(p => p.title.toLowerCase()),
                      ...lcSolvedProblems.map(t => t.toLowerCase())
                    ]);
                    
                    const newProblems = topic.problems.filter(p => !existingTitles.has(p.title.toLowerCase()));

                    return (
                      <div key={topic.id} className="p-6 hover:bg-white/[0.02] transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-light text-white mb-1">{topic.name}</h4>
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-4">
                              <span>{topic.problems.length} Problems</span>
                              {newProblems.length < topic.problems.length && (
                                <span className="text-primary-500">
                                  {topic.problems.length - newProblems.length} Already Solved/Logged
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <button
                            onClick={() => {
                              if (newProblems.length === 0) return;
                              const toAdd = newProblems.map(s => ({
                                id: crypto.randomUUID(),
                                title: s.title,
                                topic: topic.name,
                                difficulty: s.difficulty,
                                status: 'Todo' as Status,
                                link: s.link,
                                createdAt: new Date().toISOString(),
                              }));
                              setProblems(prev => [...prev, ...toAdd]);
                              playSuccess();
                            }}
                            disabled={newProblems.length === 0}
                            className="flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase bg-white/5 hover:bg-primary-500 hover:text-black text-white px-4 py-2 rounded-lg transition-all disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white"
                          >
                            <Download className="w-3.5 h-3.5" />
                            {newProblems.length === 0 ? 'All Added' : `Import ${newProblems.length}`}
                          </button>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {topic.problems.map(p => {
                            const isAdded = existingTitles.has(p.title.toLowerCase());
                            return (
                              <a
                                key={p.title}
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`text-[10px] px-2 py-1 rounded border font-mono ${
                                  isAdded 
                                    ? 'border-white/5 text-zinc-600 bg-black/20 line-through' 
                                    : 'border-white/10 text-zinc-400 hover:border-primary-500/50 hover:text-primary-400'
                                }`}
                              >
                                {p.title}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════ LEETCODE ═══════════════════════ */}
          {activeTab === 'leetcode' && (
            <div className="space-y-6">
              {!lcStats ? (
                <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl flex flex-col items-center justify-center py-24 text-center px-8">
                  <div className="w-16 h-16 rounded-full border border-primary-500/20 bg-primary-500/5 flex items-center justify-center mb-6">
                    <Link2 className="w-6 h-6 text-primary-500" />
                  </div>
                  <h2 className="text-2xl font-light text-white mb-3">Connect LeetCode</h2>
                  <p className="text-zinc-500 text-sm font-light max-w-sm mb-8 leading-relaxed">
                    Link your LeetCode account to see real-time stats, submission heatmaps, and problem counts.
                  </p>
                  <button
                    onClick={() => setShowLCModal(true)}
                    className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-black bg-primary-500 hover:bg-primary-400 px-8 py-4 transition-all hover:scale-[1.02] rounded-xl font-bold"
                  >
                    Connect Account <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  {/* Stats header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-1">:LEETCODE_PROFILE</div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-light text-white">{lcStats.username}</h2>
                        <a href={`https://leetcode.com/${lcStats.username}`} target="_blank" rel="noreferrer"
                          className="text-zinc-500 hover:text-primary-500 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="font-mono text-[9px] text-zinc-600 mt-1">
                        Last synced: {format(new Date(lcStats.fetchedAt), 'dd MMM yyyy, HH:mm')}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={refreshLeetCode}
                        disabled={lcLoading}
                        className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400 hover:text-primary-500 border border-white/10 hover:border-primary-500/30 px-5 py-2.5 transition-all rounded-xl disabled:opacity-50"
                      >
                        {lcLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
                        Refresh
                      </button>
                      <button
                        onClick={disconnectLeetCode}
                        className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400 hover:text-rose-500 border border-white/10 hover:border-rose-500/30 px-5 py-2.5 transition-all rounded-xl"
                      >
                        <X className="w-3.5 h-3.5" /> Disconnect
                      </button>
                    </div>
                  </div>

                  {lcError && (
                    <div className="flex items-center gap-3 text-rose-400 text-xs font-mono bg-rose-500/5 border border-rose-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4" /> {lcError}
                    </div>
                  )}

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: 'Total Solved', value: lcStats.totalSolved, color: 'text-white' },
                      { label: 'Easy', value: lcStats.easySolved, color: 'text-primary-500' },
                      { label: 'Medium', value: lcStats.mediumSolved, color: 'text-amber-500' },
                      { label: 'Hard', value: lcStats.hardSolved, color: 'text-rose-500' },
                    ].map((stat) => (
                      <div key={stat.label} className="border border-white/5 bg-[#0a0a0a] rounded-2xl p-6 text-center hover:border-white/10 transition-colors">
                        <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.2em] mb-3">{stat.label}</div>
                        <div className={`text-4xl font-light ${stat.color}`}>{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress bars */}
                  <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl p-8">
                    <div className="font-mono text-[10px] text-primary-500 uppercase tracking-[0.3em] mb-6">:COMPLETION_RATE</div>
                    {[
                      { label: 'Easy', solved: lcStats.easySolved, color: 'bg-primary-500', shadowColor: 'rgba(204,255,0,0.6)' },
                      { label: 'Medium', solved: lcStats.mediumSolved, color: 'bg-amber-500', shadowColor: 'rgba(245,158,11,0.6)' },
                      { label: 'Hard', solved: lcStats.hardSolved, color: 'bg-rose-500', shadowColor: 'rgba(244,63,94,0.6)' },
                    ].map(({ label, solved, color, shadowColor }) => {
                      const pct = lcStats.totalQuestions > 0 ? Math.round((solved / lcStats.totalQuestions) * 100) : 0;
                      return (
                        <div key={label} className="mb-5 last:mb-0">
                          <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] mb-2">
                            <span className="text-zinc-500">{label}</span>
                            <span className="text-zinc-400">{solved} <span className="text-zinc-600">/ {lcStats.totalQuestions}</span></span>
                          </div>
                          <div className="w-full bg-[#111] border border-white/10 h-1.5 rounded-full overflow-hidden">
                            <div
                              className={`${color} h-full rounded-full transition-all duration-1000`}
                              style={{ width: `${pct}%`, boxShadow: `0 0 10px ${shadowColor}` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Ranking */}
                  <div className="border border-white/5 bg-[#0a0a0a] rounded-2xl p-8 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-2">:GLOBAL_RANKING</div>
                      <div className="text-3xl font-light text-white">#{lcStats.ranking.toLocaleString()}</div>
                    </div>
                    <div className="font-mono text-[9px] text-zinc-600 text-right">
                      <div>Acceptance Rate</div>
                      <div className="text-primary-500 text-lg font-light mt-1">
                        {lcStats.totalQuestions > 0 ? ((lcStats.totalSolved / lcStats.totalQuestions) * 100).toFixed(1) : 0}%
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </main>

      {/* ═══════ MODALS ═══════ */}

      {/* Add / Edit Problem */}
      {(showAddProblem || editingProblem) && (
        <ProblemModal
          initial={editingProblem}
          onSave={saveProblem}
          onClose={() => { setShowAddProblem(false); setEditingProblem(null); }}
        />
      )}

      {/* LeetCode Connect */}
      {showLCModal && (
        <Modal title=":CONNECT_LEETCODE" onClose={() => { setShowLCModal(false); setLcError(''); }}>
          <div className="flex flex-col gap-5">
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Enter your LeetCode username to fetch your public profile stats.
            </p>
            <Field label="LeetCode Username">
              <input
                type="text"
                value={lcUsername}
                onChange={(e) => setLcUsername(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') connectLeetCode(); }}
                placeholder="e.g. neal_wu"
                className={inputCls}
                autoFocus
              />
            </Field>
            {lcError && (
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono bg-rose-500/5 border border-rose-500/20 rounded-lg px-3 py-2">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> {lcError}
              </div>
            )}
            <div className="flex gap-3 mt-2">
              <button
                onClick={connectLeetCode}
                disabled={lcLoading || !lcUsername.trim()}
                className="flex-1 flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-black bg-primary-500 hover:bg-primary-400 py-3 transition-all rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {lcLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Link2 className="w-3.5 h-3.5" />}
                {lcLoading ? 'Connecting...' : 'Connect'}
              </button>
              <button
                onClick={() => { setShowLCModal(false); setLcError(''); }}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-6 py-3 transition-all rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── Problem Modal ────────────────────────────────────────────────────────────
interface LCProblemDef {
  id: number;
  title: string;
  slug: string;
  difficulty: Difficulty;
}

function ProblemModal({
  initial,
  onSave,
  onClose,
}: {
  initial: DSAProblem | null;
  onSave: (p: Omit<DSAProblem, 'id' | 'createdAt'> & { id?: string; createdAt?: string }) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [topic, setTopic] = useState(initial?.topic ?? '');
  const [difficulty, setDifficulty] = useState<Difficulty>(initial?.difficulty ?? 'Medium');
  const [status, setStatus] = useState<Status>(initial?.status ?? 'Todo');
  const [link, setLink] = useState(initial?.link ?? '');

  // LeetCode autocomplete state
  const [lcProblems, setLcProblems] = useState<LCProblemDef[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingLC, setLoadingLC] = useState(false);

  useEffect(() => {
    // Fetch LC problems on mount
    const fetchLC = async () => {
      setLoadingLC(true);
      try {
        const res = await fetch('/leetcode-api/api/problems/all/');
        const data = await res.json();
        const parsed: LCProblemDef[] = data.stat_status_pairs.map((item: {
          stat: { frontend_question_id: number; question__title: string; question__title_slug: string };
          difficulty: { level: number };
        }) => {
          const level = item.difficulty.level;
          const diff: Difficulty = level === 1 ? 'Easy' : level === 2 ? 'Medium' : 'Hard';
          return {
            id: item.stat.frontend_question_id,
            title: item.stat.question__title,
            slug: item.stat.question__title_slug,
            difficulty: diff,
          };
        });
        setLcProblems(parsed);
      } catch (err) {
        console.error('Failed to fetch LC problems for autocomplete', err);
      } finally {
        setLoadingLC(false);
      }
    };
    fetchLC();
  }, []);

  const handleSubmit = () => {
    if (!title.trim() || !topic.trim()) return;
    onSave({
      ...(initial ?? {}),
      title: title.trim(),
      topic: topic.trim(),
      difficulty,
      status,
      link: link.trim() || undefined,
    });
  };

  const handleSelectLC = async (prob: LCProblemDef) => {
    setTitle(prob.title);
    setDifficulty(prob.difficulty);
    setLink(`https://leetcode.com/problems/${prob.slug}`);
    setShowSuggestions(false);
    
    setTopic('Fetching topics...');
    const topics = await fetchProblemTopics(prob.slug);
    setTopic(topics || '');
  };

  const filteredProblems = lcProblems
    .filter(p => p.title.toLowerCase().includes(title.toLowerCase()) || String(p.id) === title)
    .slice(0, 50); // limit to 50 results

  return (
    <Modal title={initial ? ':EDIT_PROBLEM' : ':ADD_PROBLEM'} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <Field label="Problem Title *">
          <div className="relative">
            <input 
              type="text" 
              value={title} 
              onChange={e => {
                setTitle(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search LeetCode e.g. Two Sum" 
              className={inputCls} 
              autoFocus 
            />
            {loadingLC && <Loader2 className="absolute right-3 top-2.5 w-4 h-4 animate-spin text-zinc-500" />}
            
            {showSuggestions && title.trim().length > 1 && filteredProblems.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-[#111] border border-white/10 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                {filteredProblems.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectLC(p)}
                    className="w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-primary-500/10 hover:text-primary-500 border-b border-white/5 last:border-0 font-mono transition-colors flex justify-between items-center"
                  >
                    <span className="truncate pr-4">{p.id}. {p.title}</span>
                    <span className={`text-[9px] uppercase tracking-widest px-2 py-0.5 rounded border flex-shrink-0 ${
                      p.difficulty === 'Easy' ? 'border-primary-500/30 text-primary-500' :
                      p.difficulty === 'Medium' ? 'border-amber-500/30 text-amber-500' :
                      'border-rose-500/30 text-rose-500'
                    }`}>
                      {p.difficulty}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </Field>
        <Field label="Topic / Category *">
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Arrays, DP, Graphs…" className={inputCls} />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Difficulty">
            <select value={difficulty} onChange={e => setDifficulty(e.target.value as Difficulty)} className={selectCls}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </Field>
          <Field label="Status">
            <select value={status} onChange={e => setStatus(e.target.value as Status)} className={selectCls}>
              <option value="Todo">Todo</option>
              <option value="Done">Done</option>
              <option value="Revisit">Revisit</option>
            </select>
          </Field>
        </div>
        <Field label="Link (optional)">
          <input type="url" value={link} onChange={e => setLink(e.target.value)} placeholder="https://leetcode.com/problems/..." className={inputCls} />
        </Field>
        <div className="flex gap-3 mt-2">
          <button
            onClick={handleSubmit}
            disabled={!title.trim() || !topic.trim()}
            className="flex-1 flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-black bg-primary-500 hover:bg-primary-400 py-3 transition-all rounded-xl font-bold disabled:opacity-50"
          >
            <Check className="w-3.5 h-3.5" /> {initial ? 'Update' : 'Add Problem'}
          </button>
          <button onClick={onClose} className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-6 py-3 transition-all rounded-xl">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ─── Chatbot Modal ────────────────────────────────────────────────────────────

const getSystemPrompt = (solvedProblems: string[]) => `You are an elite coding interviewer and LeetCode practice coach.
The user will tell you what topics they want to practice or their current skill level.
Your job is to recommend a curated list of LeetCode problems (usually 3-5 at a time).

${solvedProblems.length > 0 ? 
  `IMPORTANT: The user has ALREADY solved the following problems. DO NOT recommend these again: ${solvedProblems.join(', ')}.` : 
  `IMPORTANT: The user hasn't marked any problems as "Done" in their tracker yet. If they ask what problems they have done, tell them their tracker log is empty.`}

When you recommend problems, you MUST output them inside a single JSON array block exactly like this:
\`\`\`json
[
  { "title": "Two Sum", "topic": "Array, Hash Table", "difficulty": "Easy", "slug": "two-sum" }
]
\`\`\`
Make sure the slug is exactly the LeetCode url slug.
Do not include any other JSON blocks. You can add conversational text before or after the JSON block.
If the user says they already did a problem or want a different one, acknowledge it and provide an updated JSON array block.`;

interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

function ChatbotModal({
  apiKey,
  solvedProblems,
  onClose,
  onApprove,
}: {
  apiKey: string;
  solvedProblems: string[];
  onClose: () => void;
  onApprove: (problems: Record<string, unknown>[]) => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hi! I'm your AI Practice Coach. Tell me what topics you want to practice or what your current skill level is, and I'll curate a customized LeetCode list for you!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const apiKeyMissing = !apiKey;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || apiKeyMissing) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const history = messages.map(m => ({ role: m.role, parts: [{ text: m.content }] }));
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: getSystemPrompt(solvedProblems)
        }
      });

      const text = response.text || 'Sorry, I could not generate a response.';
      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error: unknown) {
      console.error('Gemini API Error:', error);
      const msg = error instanceof Error ? error.message : String(error);
      setMessages(prev => [...prev, { role: 'model', content: `Error: ${msg}` }]);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessageContent = (content: string) => {
    const parts = content.split(/(```json[\s\S]*?```)/);
    
    return parts.map((part, i) => {
      if (part.startsWith('```json')) {
        try {
          const jsonStr = part.replace('```json', '').replace('```', '').trim();
          const suggestions = JSON.parse(jsonStr) as Record<string, unknown>[];
          if (Array.isArray(suggestions) && suggestions.length > 0) {
            return (
              <div key={i} className="my-4 border border-primary-500/30 bg-primary-500/5 rounded-xl p-4">
                <h4 className="font-mono text-[10px] text-primary-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" /> Suggested Practice Set
                </h4>
                <div className="flex flex-col gap-2 mb-4">
                  {suggestions.map((s, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-black/40 border border-white/5 p-2.5 rounded-lg text-sm">
                      <div>
                        <div className="text-white font-medium">{String(s.title)}</div>
                        <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{String(s.topic)}</div>
                      </div>
                      <span className={`text-[9px] uppercase tracking-widest px-2 py-0.5 rounded border flex-shrink-0 ${
                        s.difficulty === 'Easy' ? 'border-primary-500/30 text-primary-500' :
                        s.difficulty === 'Medium' ? 'border-amber-500/30 text-amber-500' :
                        'border-rose-500/30 text-rose-500'
                      }`}>
                        {String(s.difficulty)}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onApprove(suggestions)}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-primary-500 hover:bg-primary-400 text-black text-[10px] font-mono tracking-widest uppercase rounded-lg font-bold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Approve & Add to Todo
                </button>
              </div>
            );
          }
        } catch {
          // JSON parse failed, just render as text
        }
      }
      return <div key={i} className="whitespace-pre-wrap">{part}</div>;
    });
  };

  return (
    <Modal title=":AI_PRACTICE_COACH" onClose={onClose}>
      <div className="flex flex-col h-[60vh]">
        {apiKeyMissing && (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs p-3 rounded-lg mb-4 font-mono text-center">
            VITE_GEMINI_API_KEY is not set in your .env.local file.
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-4 font-sans custom-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                m.role === 'user' 
                  ? 'bg-primary-500 text-black rounded-tr-sm font-medium' 
                  : 'bg-white/5 border border-white/10 text-zinc-300 rounded-tl-sm'
              }`}>
                {m.role === 'user' ? m.content : renderMessageContent(m.content)}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 text-zinc-400 rounded-2xl rounded-tl-sm px-4 py-3 text-sm flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin" /> Coach is thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={ev => { if (ev.key === 'Enter') handleSend(); }}
            placeholder="E.g., I want to practice Graph BFS..."
            disabled={apiKeyMissing || isTyping}
            className="w-full bg-black/50 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary-500/50 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || apiKeyMissing || isTyping}
            className="absolute right-2 top-2 p-1.5 text-zinc-400 hover:text-primary-500 disabled:opacity-50 transition-colors bg-white/5 rounded-lg"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Modal>
  );
}
