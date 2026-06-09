

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { UserCircle } from "lucide-react";

export default function AboutMe() {
  return (
    <Card className="group h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserCircle className="text-purple-400" size={24} />
          <span>About Me</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed text-zinc-300">
          I'm a <span className="text-white font-medium">Frontend Developer</span> with over a year of experience crafting responsive, performant, and user-focused web applications. 
          <br /><br />
          Currently, I'm expanding my skill set into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium">blockchain</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-medium">Web3 development</span>. I am deeply driven by a strong interest in decentralized technologies and their potential to fundamentally shape the future of the internet.
        </p>
      </CardContent>
    </Card>
  );
}
