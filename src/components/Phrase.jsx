import { Quote } from "lucide-react";

export default function Phrase() {
  return (
    <figure className="relative p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-xs sm:text-sm text-zinc-300 font-geistmono group hover:bg-white/[0.04] transition-colors duration-300 h-full flex flex-col justify-center">
      <Quote className="absolute top-3 left-3 text-white/5 w-10 h-10 -z-10 group-hover:text-purple-500/10 transition-colors duration-500" />
      <blockquote className="italic leading-relaxed text-balance z-10 relative">
        A <span className="font-semibold text-white">language</span> that
        doesn't affect the way you think about{" "}
        <span className="font-semibold text-purple-400">programming</span> is not
        worth knowing.
      </blockquote>
      <figcaption className="mt-2.5 text-right text-[11px] text-zinc-500 font-medium">
        — Alan Perlis
      </figcaption>
    </figure>
  );
}
