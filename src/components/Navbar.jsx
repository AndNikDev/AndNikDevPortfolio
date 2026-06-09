"use client";
import { useState, useEffect } from "react";
import { Star, GitCommit, GitPullRequest, CircleDot, Users, FolderDot } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/github-stats");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1800000);
    return () => clearInterval(interval);
  }, []);

  const stats = data
    ? [
        { label: "Stars", value: data?.stars, icon: Star },
        { label: "Commits", value: data?.commits, icon: GitCommit },
        { label: "PRs", value: data?.prs, icon: GitPullRequest },
        { label: "Issues", value: data?.issues, icon: CircleDot },
        { label: "Followers", value: data?.followers, icon: Users },
        { label: "Repos", value: data?.public_repos, icon: FolderDot },
      ].filter((stat) => stat.value && stat.value > 0)
    : [];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-full px-6 py-3 flex items-center gap-6 font-geist text-white max-w-full overflow-x-auto no-scrollbar">
        {/* Logo */}
        <div className="text-lg font-bold tracking-tight shrink-0">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AndNik.Dev
          </span>
        </div>

        {/* GitHub Stats */}
        <div className="flex items-center gap-4 text-sm shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-zinc-400 pr-4 border-r border-white/10">
            <FontAwesomeIcon icon={faGithub} className="text-base" />
            <span>Stats</span>
          </div>
          {stats.length > 0 ? (
            <div className="flex gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors cursor-default"
                  title={stat.label}
                >
                  <stat.icon size={14} className="text-cyan-400" />
                  <span className="font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
