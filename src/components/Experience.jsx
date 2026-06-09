

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ExampleCorp",
      desc: "Built and maintained UI components using React and TailwindCSS in a production environment.",
      year: "2023 - Present"
    },
    {
      role: "Web3 Intern",
      company: "CryptoStart",
      desc: "Collaborated on decentralized app development and explored smart contract logic with Solidity.",
      year: "2022 - 2023"
    },
    {
      role: "Open Source Contributor",
      company: "Various",
      desc: "Provided improvements in documentation and resolved frontend issues in community-driven projects.",
      year: "2021 - 2022"
    }
  ];

  return (
    <Card className="group h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="text-cyan-400" size={24} />
          <span>Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-l border-white/10 ml-3 space-y-4 pb-1">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-6">
              <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-1.5 border-2 border-[#121212] group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(34,211,238,0)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-medium text-base font-geist">{exp.role}</h3>
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>{exp.company}</span>
                  <span>{exp.year}</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
