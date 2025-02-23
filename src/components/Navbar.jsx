"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [data, setData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  return (
    <nav className="fixed top-0 w-full bg-black text-white flex items-center justify-between px-6 py-3 shadow-md">
      <div className="text-2xl font-bold relative overflow-hidden">
        <span className="animate-gradient bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
          AndNik.Dev
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <span className="text-gray-400">GitHub stats</span>
        <div className="relative flex space-x-4">
          {data ? (
            [
              { label: "Stars", value: data?.stars || 0, icon: "⭐" },
              { label: "Commits", value: data?.commits || 0, icon: "📌" },
              { label: "PRs", value: data?.prs || 0, icon: "🔀" },
              { label: "Issues", value: data?.issues || 0, icon: "🐛" },
              { label: "Followers", value: data?.followers || 0, icon: "👥" },
              { label: "Repos", value: data?.public_repos || 0, icon: "📂" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative flex items-center transition-transform duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-lg">
                  {stat.icon}
                </div>
                <div
                  className={`absolute left-full ml-3 bg-gray-900 text-white px-3 py-1 rounded transition-opacity duration-300 transform ${
                    hoveredIndex === index
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                >
                  {stat.label}: {stat.value}
                </div>
              </div>
            ))
          ) : (
            <span>Cargando...</span>
          )}
        </div>
      </div>
    </nav>
  );
}
