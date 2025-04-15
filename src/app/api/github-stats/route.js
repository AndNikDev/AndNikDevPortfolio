export async function GET() {
  const GITHUB_USERNAME = "andnikdev";
  const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    "Content-Type": "application/json",
  };

  const query = `
    {
      user(login: "${GITHUB_USERNAME}") {
        repositories(first: 100, isFork: false, ownerAffiliations: OWNER) {
          nodes {
            stargazerCount
            defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
          }
        }
        totalRepos: repositories {
          totalCount
        }
        pullRequests {
          totalCount
        }
        issues {
          totalCount
        }
        followers {
          totalCount
        }
      }
    }
  `;

  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    const json = await res.json();

    if (json.errors || !json.data) {
      return new Response(
        JSON.stringify({ error: json.errors || "No data returned from GitHub" }),
        { status: 500 }
      );
    }

    const repos = json.data.user.repositories.nodes;

    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazerCount, 0);
    const totalCommits = repos.reduce((acc, repo) => {
      const commits = repo.defaultBranchRef?.target?.history?.totalCount || 0;
      return acc + commits;
    }, 0);

    const stats = {
      stars: totalStars,
      commits: totalCommits,
      prs: json.data.user.pullRequests.totalCount,
      issues: json.data.user.issues.totalCount,
      followers: json.data.user.followers.totalCount,
      public_repos: json.data.user.totalRepos.totalCount,
    };

    const filteredStats = Object.fromEntries(
      Object.entries(stats).filter(([_, value]) => value > 0)
    );

    return new Response(JSON.stringify(filteredStats), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
