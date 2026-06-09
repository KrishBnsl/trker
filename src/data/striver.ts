export interface CuratedProblem {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  link: string;
}

export interface CuratedTopic {
  id: string;
  name: string;
  problems: CuratedProblem[];
}

export const STRIVER_SHEET: CuratedTopic[] = [
  {
    id: 'day1-arrays',
    name: 'Day 1: Arrays',
    problems: [
      { title: 'Set Matrix Zeroes', difficulty: 'Medium', link: 'https://leetcode.com/problems/set-matrix-zeroes/' },
      { title: 'Pascal\'s Triangle', difficulty: 'Easy', link: 'https://leetcode.com/problems/pascals-triangle/' },
      { title: 'Next Permutation', difficulty: 'Medium', link: 'https://leetcode.com/problems/next-permutation/' },
      { title: 'Kadane\'s Algorithm', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-subarray/' },
      { title: 'Sort Colors', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-colors/' },
      { title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
    ]
  },
  {
    id: 'day2-arrays2',
    name: 'Day 2: Arrays Part-II',
    problems: [
      { title: 'Rotate Image', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-image/' },
      { title: 'Merge Intervals', difficulty: 'Medium', link: 'https://leetcode.com/problems/merge-intervals/' },
      { title: 'Merge Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-sorted-array/' },
      { title: 'Find the Duplicate Number', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-the-duplicate-number/' },
      { title: 'Repeat and Missing Number Array', difficulty: 'Medium', link: 'https://www.interviewbit.com/problems/repeat-and-missing-number-array/' },
      { title: 'Inversions of Array', difficulty: 'Hard', link: 'https://www.codingninjas.com/codestudio/problems/count-inversions_615' },
    ]
  },
  {
    id: 'day3-arraysmaths',
    name: 'Day 3: Arrays/maths',
    problems: [
      { title: 'Search a 2D Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-a-2d-matrix/' },
      { title: 'Pow(x, n)', difficulty: 'Medium', link: 'https://leetcode.com/problems/powx-n/' },
      { title: 'Majority Element', difficulty: 'Easy', link: 'https://leetcode.com/problems/majority-element/' },
      { title: 'Majority Element II', difficulty: 'Medium', link: 'https://leetcode.com/problems/majority-element-ii/' },
      { title: 'Unique Paths', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-paths/' },
      { title: 'Reverse Pairs', difficulty: 'Hard', link: 'https://leetcode.com/problems/reverse-pairs/' },
    ]
  },
  {
    id: 'day4-arrayshashing',
    name: 'Day 4: Arrays Part-IV',
    problems: [
      { title: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/' },
      { title: '4Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/4sum/' },
      { title: 'Longest Consecutive Sequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-consecutive-sequence/' },
      { title: 'Largest subarray with 0 sum', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1' },
      { title: 'Count number of subarrays with given XOR', difficulty: 'Medium', link: 'https://www.interviewbit.com/problems/subarray-with-given-xor/' },
      { title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
    ]
  },
  {
    id: 'day5-linkedlist',
    name: 'Day 5: Linked List',
    problems: [
      { title: 'Reverse Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-linked-list/' },
      { title: 'Middle of the Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
      { title: 'Merge Two Sorted Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
      { title: 'Remove Nth Node From End of List', difficulty: 'Medium', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
      { title: 'Add Two Numbers', difficulty: 'Medium', link: 'https://leetcode.com/problems/add-two-numbers/' },
      { title: 'Delete Node in a Linked List', difficulty: 'Medium', link: 'https://leetcode.com/problems/delete-node-in-a-linked-list/' },
    ]
  },
  {
    id: 'day6-linkedlist2',
    name: 'Day 6: Linked List Part-II',
    problems: [
      { title: 'Intersection of Two Linked Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
      { title: 'Linked List Cycle', difficulty: 'Easy', link: 'https://leetcode.com/problems/linked-list-cycle/' },
      { title: 'Reverse Nodes in k-Group', difficulty: 'Hard', link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/' },
      { title: 'Palindrome Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/palindrome-linked-list/' },
      { title: 'Linked List Cycle II', difficulty: 'Medium', link: 'https://leetcode.com/problems/linked-list-cycle-ii/' },
      { title: 'Flattening a Linked List', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1' },
    ]
  },
  {
    id: 'day7-linkedlistarrays',
    name: 'Day 7: Linked List and Arrays',
    problems: [
      { title: 'Rotate List', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-list/' },
      { title: 'Copy List with Random Pointer', difficulty: 'Medium', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
      { title: '3Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/3sum/' },
      { title: 'Trapping Rain Water', difficulty: 'Hard', link: 'https://leetcode.com/problems/trapping-rain-water/' },
      { title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
      { title: 'Max Consecutive Ones', difficulty: 'Easy', link: 'https://leetcode.com/problems/max-consecutive-ones/' },
    ]
  },
  {
    id: 'day8-greedy',
    name: 'Day 8: Greedy Algorithm',
    problems: [
      { title: 'N meetings in one room', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1' },
      { title: 'Minimum Platforms', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1' },
      { title: 'Job Sequencing Problem', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1' },
      { title: 'Fractional Knapsack', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1' },
      { title: 'Find Minimum Number Of Coins', difficulty: 'Medium', link: 'https://www.codingninjas.com/codestudio/problems/975277' },
      { title: 'Assign Cookies', difficulty: 'Easy', link: 'https://leetcode.com/problems/assign-cookies/' },
    ]
  },
  {
    id: 'day9-recursion',
    name: 'Day 9: Recursion',
    problems: [
      { title: 'Subset Sums', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/subset-sums2234/1' },
      { title: 'Subsets II', difficulty: 'Medium', link: 'https://leetcode.com/problems/subsets-ii/' },
      { title: 'Combination Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum/' },
      { title: 'Combination Sum II', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum-ii/' },
      { title: 'Palindrome Partitioning', difficulty: 'Medium', link: 'https://leetcode.com/problems/palindrome-partitioning/' },
      { title: 'Permutation Sequence', difficulty: 'Hard', link: 'https://leetcode.com/problems/permutation-sequence/' },
    ]
  },
  {
    id: 'day10-recursionbacktracking',
    name: 'Day 10: Recursion and Backtracking',
    problems: [
      { title: 'Permutations', difficulty: 'Medium', link: 'https://leetcode.com/problems/permutations/' },
      { title: 'N-Queens', difficulty: 'Hard', link: 'https://leetcode.com/problems/n-queens/' },
      { title: 'Sudoku Solver', difficulty: 'Hard', link: 'https://leetcode.com/problems/sudoku-solver/' },
      { title: 'M-Coloring Problem', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1' },
      { title: 'Rat in a Maze Problem - I', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1' },
      { title: 'Word Break II', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-break-ii/' },
    ]
  },
  {
    id: 'day11-binarysearch',
    name: 'Day 11: Binary Search',
    problems: [
      { title: 'The N-th root of an integer', difficulty: 'Medium', link: 'https://www.codingninjas.com/codestudio/problems/1062679' },
      { title: 'Matrix Median', difficulty: 'Medium', link: 'https://www.interviewbit.com/problems/matrix-median/' },
      { title: 'Single Element in a Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/single-element-in-a-sorted-array/' },
      { title: 'Search in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
      { title: 'Median of Two Sorted Arrays', difficulty: 'Hard', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
      { title: 'K-th element of two sorted Arrays', difficulty: 'Medium', link: 'https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1' },
      { title: 'Allocate Minimum Number of Pages', difficulty: 'Hard', link: 'https://www.interviewbit.com/problems/allocate-books/' },
      { title: 'Aggressive Cows', difficulty: 'Hard', link: 'https://www.spoj.com/problems/AGGRCOW/' }
    ]
  }
];
