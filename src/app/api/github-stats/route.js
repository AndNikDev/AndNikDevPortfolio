export async function GET(req) {
  const GITHUB_USERNAME = "andnikdev";
  const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
  const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
  const GITHUB_EVENTS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/events`;
  const GITHUB_PR_URL = `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr`;
  const GITHUB_ISSUES_URL = `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:issue`;

  try {
    const headers = { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` };

    const [
      userResponse,
      reposResponse,
      eventsResponse,
      prResponse,
      issuesResponse,
    ] = await Promise.all([
      fetch(GITHUB_API_URL, { headers }),
      fetch(GITHUB_REPOS_URL, { headers }),
      fetch(GITHUB_EVENTS_URL, { headers }),
      fetch(GITHUB_PR_URL, { headers }),
      fetch(GITHUB_ISSUES_URL, { headers }),
    ]);

    if (
      !userResponse.ok ||
      !reposResponse.ok ||
      !eventsResponse.ok ||
      !prResponse.ok ||
      !issuesResponse.ok
    ) {
      return new Response(
        JSON.stringify({ error: "Error fetching data from GitHub" }),
        { status: 500 }
      );
    }

    const [userData, reposData, eventsData, prData, issuesData] =
      await Promise.all([
        userResponse.json(),
        reposResponse.json(),
        eventsResponse.json(),
        prResponse.json(),
        issuesResponse.json(),
      ]);

    const totalStars = reposData.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
    const totalCommits = eventsData
      .filter((event) => event.type === "PushEvent")
      .reduce((sum, event) => sum + event.payload.commits.length, 0);
    const totalPRs = prData.total_count;
    const totalIssues = issuesData.total_count;

    return new Response(
      JSON.stringify({
        stars: totalStars,
        commits: totalCommits,
        prs: totalPRs,
        issues: totalIssues,
        followers: userData.followers,
        public_repos: userData.public_repos,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("GitHub API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
