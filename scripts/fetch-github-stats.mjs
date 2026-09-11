import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(__dirname, "../public/github-stats.json");

const GITHUB_USERNAME = "andnikdev";
const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

async function fetchStats() {
  if (token) {
    try {
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

      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "node-fetch",
        },
        body: JSON.stringify({ query }),
      });

      const json = await res.json();
      if (json?.data?.user) {
        const user = json.data.user;
        const repos = user.repositories?.nodes || [];
        const totalStars = repos.reduce((acc, r) => acc + (r.stargazerCount || 0), 0);
        const totalCommits = repos.reduce((acc, r) => {
          const count = r.defaultBranchRef?.target?.history?.totalCount || 0;
          return acc + count;
        }, 0);

        const stats = {
          stars: totalStars,
          commits: totalCommits,
          prs: user.pullRequests?.totalCount || 0,
          issues: user.issues?.totalCount || 0,
          followers: user.followers?.totalCount || 0,
          public_repos: user.totalRepos?.totalCount || 0,
        };

        await fs.writeFile(outputPath, JSON.stringify(stats, null, 2), "utf-8");
        console.log("Successfully updated public/github-stats.json via GraphQL:", stats);
        return;
      }
    } catch (err) {
      console.warn("GraphQL stats fetch failed, trying REST fallback:", err.message);
    }
  }

  // REST fallback
  try {
    const headers = { "User-Agent": "node-fetch" };
    if (token) headers.Authorization = `Bearer ${token}`;

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers }),
    ]);

    if (userRes.ok) {
      const userData = await userRes.json();
      let totalStars = 0;
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        if (Array.isArray(reposData)) {
          totalStars = reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
        }
      }

      // Keep existing commits if available
      let existingCommits = 299;
      let existingPrs = 16;
      try {
        const existing = JSON.parse(await fs.readFile(outputPath, "utf-8"));
        if (existing.commits) existingCommits = existing.commits;
        if (existing.prs) existingPrs = existing.prs;
      } catch {}

      const stats = {
        stars: totalStars,
        commits: existingCommits,
        prs: existingPrs,
        issues: 0,
        followers: userData.followers || 0,
        public_repos: userData.public_repos || 0,
      };

      await fs.writeFile(outputPath, JSON.stringify(stats, null, 2), "utf-8");
      console.log("Successfully updated public/github-stats.json via REST:", stats);
    }
  } catch (e) {
    console.warn("Could not fetch stats, keeping cached file:", e.message);
  }
}

fetchStats();
