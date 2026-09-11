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
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Card className="group flex flex-col items-center text-center p-4">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 flex justify-center items-center mx-auto">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full animate-pulse blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
        <Image
          src={`${basePath}/profile.jpg`}
          alt="Profile Picture"
          width={112}
          height={112}
          quality={100}
          className="rounded-full object-cover w-full h-full relative z-10 border-2 border-white/10"
          priority
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-bold font-geist text-white mb-0.5">
        Nikolayk Muñoz
      </h2>
      <p className="text-purple-400 font-medium mb-2 text-xs sm:text-sm">@AndNikDev</p>
      
      <p className="text-xs text-zinc-300 text-balance leading-snug font-geistmono mb-3">
        Full Stack Developer • AI-Augmented Engineer • Data Analytics & Engineering
      </p>

      <div className="w-full h-px bg-white/10 mb-3"></div>

      <div className="flex flex-col gap-1.5 w-full text-left text-xs text-zinc-400 font-geistmono mb-3">
        <div className="flex items-center gap-2.5">
          <MapPin size={13} className="text-cyan-400 shrink-0" />
          <span>Costa Rica</span>
        </div>
        <div className="flex items-center gap-2.5 truncate">
          <Mail size={13} className="text-cyan-400 shrink-0" />
          <a href="mailto:andnik.developer@gmail.com" className="hover:text-white transition-colors truncate">
            andnik.developer@gmail.com
          </a>
        </div>
      </div>

      {/* Redes sociales */}
      <nav
        className="flex justify-center gap-3 w-full"
        aria-label="Social Media Links"
      >
        <a
          href="https://github.com/andnikdev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-white/20"
        >
          <FontAwesomeIcon icon={faGithub} className="text-base sm:text-lg" />
        </a>
        <a
          href="https://twitter.com/andnikdev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-white/20"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-base sm:text-lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/nikolaykmunozalvarez/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5 hover:border-white/20"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-base sm:text-lg" />
        </a>
      </nav>
    </Card>
  );
}
