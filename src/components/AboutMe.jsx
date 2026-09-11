import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { UserCircle } from "lucide-react";

export default function AboutMe() {
  return (
    <Card className="group h-full p-4">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <UserCircle className="text-purple-400" size={20} />
          <span>About Me</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xs sm:text-sm leading-relaxed text-zinc-300">
        <p className="mb-2.5">
          I'm a passionate <span className="text-white font-medium">Software & Full Stack Developer</span> building scalable digital solutions with a strong focus on <span className="text-purple-300 font-medium">modern web applications</span>, <span className="text-cyan-300 font-medium">AI-assisted engineering</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">Data Analytics & Engineering</span>.
        </p>
        <p>
          Currently deepening my expertise in <span className="text-white">data pipelines, BI dashboards (Power BI, Tableau, Python, SQL)</span>, and resilient database architectures, while leveraging modern AI agents to build high-impact products faster.
        </p>
      </CardContent>
    </Card>
  );
}
