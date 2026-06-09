

import { Quote } from "lucide-react";

export default function Phrase() {
  return (
    <figure className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-base text-zinc-300 font-geistmono group hover:bg-white/[0.04] transition-colors duration-300 h-full flex flex-col justify-center">
      <Quote className="absolute top-4 left-4 text-white/5 w-16 h-16 -z-10 group-hover:text-purple-500/10 transition-colors duration-500" />
      <blockquote className="italic leading-relaxed text-balance z-10 relative mt-2">
        A <span className="font-semibold text-white">language</span> that
        doesn't affect the way you think about{" "}
        <span className="font-semibold text-purple-400">programming</span> is not
        worth knowing.
      </blockquote>
      <figcaption className="mt-6 text-right text-sm text-zinc-500 font-medium">
        — Alan Perlis
      </figcaption>
    </figure>
  );
}
