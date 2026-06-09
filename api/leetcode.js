export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { session } = req.body;
  if (!session) {
    return res.status(400).json({ error: 'Missing LEETCODE_SESSION' });
  }

  try {
    let skip = 0;
    const limit = 100;
    let allQuestions = [];
    let hasMore = true;

    while (hasMore) {
      const leetcodeRes = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `LEETCODE_SESSION=${session};`
        },
        body: JSON.stringify({
          query: `
            query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
              problemsetQuestionList: questionList(
                categorySlug: $categorySlug
                limit: $limit
                skip: $skip
                filters: $filters
              ) {
                questions: data {
                  title
                }
              }
            }
          `,
          variables: {
            categorySlug: "",
            skip: skip,
            limit: limit,
            filters: { status: "AC" }
          }
        })
      });

      if (!leetcodeRes.ok) {
        return res.status(leetcodeRes.status).json({ error: 'Failed to fetch from LeetCode' });
      }

      const data = await leetcodeRes.json();
      const questions = data?.data?.problemsetQuestionList?.questions || [];
      allQuestions = allQuestions.concat(questions);
      
      if (questions.length < limit) {
        hasMore = false;
      } else {
        skip += limit;
      }
    }

    res.status(200).json({ data: { problemsetQuestionList: { questions: allQuestions } } });
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
}
