"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link2, Check } from "lucide-react";

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => (typeof window !== "undefined" ? window.location.href : "");

  const shares = [
    {
      label: "X",
      icon: faXTwitter,
      href: () =>
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getUrl())}`,
    },
    {
      label: "LinkedIn",
      icon: faLinkedin,
      href: () =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`,
    },
    {
      label: "WhatsApp",
      icon: faWhatsapp,
      href: () =>
        `https://wa.me/?text=${encodeURIComponent(`${title} ${getUrl()}`)}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {shares.map((share) => (
        <a
          key={share.label}
          href={share.href()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartir en ${share.label}`}
          className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all"
        >
          <FontAwesomeIcon icon={share.icon} className="text-sm" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copiar enlace"
        className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all"
      >
        {copied ? <Check size={15} className="text-emerald-400" /> : <Link2 size={15} />}
      </button>
    </div>
  );
}
