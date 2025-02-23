"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [data, setData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
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
  }, [isClient]);

  if (!isClient) return null;

  return (
    <nav className="fixed top-0 w-full bg-black text-white flex items-center justify-between shadow-md font-geist">
      <div className="flex items-center w-full">
        <div className="bg-gray-900 px-9 py-3 text-2xl font-bold relative">
          <span className="animate-gradient bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            AndNik.Dev
          </span>
        </div>
        <div className="bg-black px-6 py-3 text-gray-400 text-xl font-semibold border-l border-gray-700">
          GitHub Stats
        </div>
        <div className="flex items-center space-x-4 ml-auto pr-6">
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
                className="relative flex items-center transition-all duration-500 ease-out overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`flex items-center justify-center bg-gray-800 text-lg rounded-full transition-all duration-500 ease-out ${
                    hoveredIndex === index ? "w-32 px-4" : "w-12"
                  } h-12`}
                >
                  {hoveredIndex === index && (
                    <span className="mr-2 text-white transition-opacity duration-500 ease-out opacity-100 whitespace-nowrap">
                      {stat.value} {stat.label}
                    </span>
                  )}
                  {stat.icon}
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
