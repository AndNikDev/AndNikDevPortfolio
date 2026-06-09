

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "DeFi Dashboard",
      desc: "A sleek dashboard to track portfolio across multiple chains with real-time token pricing.",
      tags: ["Next.js", "Tailwind", "Web3"],
      link: "#"
    },
    {
      name: "NFT Marketplace",
      desc: "Smart contract logic and modern frontend interface for minting digital assets.",
      tags: ["Solidity", "React", "Ethers.js"],
      link: "#"
    }
  ];

  return (
    <Card className="group h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FolderGit2 className="text-emerald-400" size={24} />
          <span>Featured Projects</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((proj, i) => (
            <div key={i} className="group/proj relative bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-medium text-lg font-geist">{proj.name}</h3>
                <a href={proj.link} className="text-zinc-500 hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-zinc-400 text-xs mb-3 leading-relaxed line-clamp-2">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-geistmono px-2.5 py-1 bg-white/5 rounded-md text-zinc-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-zinc-500 italic">More projects coming soon...</p>
        </div>
      </CardContent>
    </Card>
  );
}
