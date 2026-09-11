import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Data Analytics & BI Platform",
      desc: "Interactive analytics dashboards and ETL pipelines transforming business datasets into actionable KPIs and metrics.",
      tags: ["Python", "SQL", "Power BI", "PostgreSQL"],
      link: "https://github.com/AndNikDev"
    },
    {
      name: "Full-Stack Web App",
      desc: "Modern SaaS platform built with Next.js App Router, responsive design system, and robust database architecture.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind"],
      link: "https://github.com/AndNikDev"
    }
  ];

  return (
    <Card className="group h-full p-4">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <FolderGit2 className="text-emerald-400" size={20} />
          <span>Featured Projects</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {projects.map((proj, i) => (
            <div key={i} className="group/proj relative bg-white/[0.02] border border-white/5 rounded-xl p-3 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1.5">
                  <h3 className="text-white font-medium text-sm sm:text-base font-geist">{proj.name}</h3>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                    <ExternalLink size={15} />
                  </a>
                </div>
                <p className="text-zinc-400 text-xs mb-2.5 leading-relaxed line-clamp-2">
                  {proj.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="text-[11px] font-geistmono px-2 py-0.5 bg-white/5 rounded text-zinc-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-center">
          <a
            href="https://github.com/AndNikDev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-zinc-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 font-geistmono"
          >
            Ver más repositorios en GitHub →
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
