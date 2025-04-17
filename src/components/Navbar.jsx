"use client";
import { useState, useEffect } from "react";

// 🔁 Traducción simple simulada
const t = {
  en: {
    githubStats: "GitHub Stats:",
    stars: "Stars",
    commits: "Commits",
    prs: "Pull Requests",
    issues: "Issues",
    followers: "Followers",
    repos: "Repositories",
    loading: "Loading...",
  },
  es: {
    githubStats: "Estadísticas de GitHub:",
    stars: "Estrellas",
    commits: "Commits",
    prs: "Pull Requests",
    issues: "Issues",
    followers: "Seguidores",
    repos: "Repositorios",
    loading: "Cargando...",
  },
};

// Simulamos idioma actual (esto después lo manejará el framework de i18n)
const currentLang = "en"; // Cambia a "es" para español

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
        { label: t[currentLang].stars, value: data?.stars, icon: "⭐" },
        { label: t[currentLang].commits, value: data?.commits, icon: "📌" },
        { label: t[currentLang].prs, value: data?.prs, icon: "🔀" },
        { label: t[currentLang].issues, value: data?.issues, icon: "🐛" },
        { label: t[currentLang].followers, value: data?.followers, icon: "👥" },
        { label: t[currentLang].repos, value: data?.public_repos, icon: "📂" },
      ].filter((stat) => stat.value && stat.value > 0)
    : [];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between font-geist text-white">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <span className="animate-gradient bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            AndNik.Dev
          </span>
        </div>

        {/* GitHub Stats */}
        <div className="flex space-x-3 text-sm">
          <div className="flex gap-2 text-md py-1 text-zinc-400 mr-2">
            {t[currentLang].githubStats}
          </div>
          {stats.length > 0 ? (
            stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-zinc-800/60 rounded-full text-zinc-300 hover:text-white transition-colors"
                title={stat.label}
              >
                <span>{stat.icon}</span>
                <span className="hidden md:inline">{stat.value}</span>
              </div>
            ))
          ) : (
            <span className="text-zinc-500 italic">
              {t[currentLang].loading}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
