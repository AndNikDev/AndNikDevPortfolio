

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Card } from "@/components/ui/Card";
import { MapPin, Mail } from "lucide-react";

export default function ProfileCard() {
  return (
    <Card className="group flex flex-col items-center text-center p-5">
      <div className="relative w-36 h-36 mb-4 flex justify-center items-center mx-auto">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full animate-pulse blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={144}
          height={144}
          quality={100}
          className="rounded-full object-cover w-full h-full relative z-10 border-2 border-white/10"
          priority
        />
      </div>

      <h2 className="text-2xl font-bold font-geist text-white mb-1">
        Nikolayk Muñoz
      </h2>
      <p className="text-purple-400 font-medium mb-3 text-sm">@AndNikDev</p>
      
      <p className="text-xs text-zinc-300 text-balance leading-relaxed font-geistmono mb-4">
        Frontend Developer • Web3 Learner • Tech Explorer
      </p>

      <div className="w-full h-px bg-white/10 mb-4"></div>

      <div className="flex flex-col gap-2 w-full text-left text-xs text-zinc-400 font-geistmono mb-5">
        <div className="flex items-center gap-3">
          <MapPin size={14} className="text-cyan-400" />
          <span>Costa Rica</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail size={14} className="text-cyan-400" />
          <a href="mailto:andnik.developer@gmail.com" className="hover:text-white transition-colors">andnik.developer@gmail.com</a>
        </div>
      </div>

      {/* Redes sociales */}
      <nav
        className="flex justify-center gap-4 w-full"
        aria-label="Social Media Links"
      >
        <a
          href="https://github.com/andnikdev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-white/20"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
        <a
          href="https://twitter.com/andnikdev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-white/20"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
        </a>
        <a
          href="https://linkedin.com/in/andnikdev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-white/20"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>
      </nav>
    </Card>
  );
}
