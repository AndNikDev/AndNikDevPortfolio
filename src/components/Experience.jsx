import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack & Software Developer",
      company: "Projects & Independent",
      desc: "Building scalable full-stack applications with Next.js, React, Node.js, and PostgreSQL, leveraging modern AI-assisted engineering.",
      year: "2023 - Present"
    },
    {
      role: "Data Analytics & Engineering Student",
      company: "Continuous Specialization",
      desc: "Creating business intelligence dashboards, automated data transformation pipelines, and relational models with Python, SQL, and Power BI.",
      year: "2023 - Present"
    },
    {
      role: "Software Developer & Collaborator",
      company: "Community & Open Source",
      desc: "Contributed to frontend tooling, component architectures, and responsive UI implementations across modern web frameworks.",
      year: "2022 - 2023"
    }
  ];

  return (
    <Card className="group h-full p-4">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Briefcase className="text-cyan-400" size={20} />
          <span>Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-l border-white/10 ml-2 space-y-3 pb-0.5">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-5">
              <div className="absolute w-2.5 h-2.5 bg-white/20 rounded-full -left-[5.5px] top-1.5 border-2 border-[#121212] group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(34,211,238,0)] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-white font-medium text-sm font-geist">{exp.role}</h3>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1">
                  <span>{exp.company}</span>
                  <span>{exp.year}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
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
