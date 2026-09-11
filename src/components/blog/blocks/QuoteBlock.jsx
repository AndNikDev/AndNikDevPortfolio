import { Quote } from "lucide-react";

export default function QuoteBlock({ children, author }) {
  return (
    <blockquote className="relative my-6 pl-6 pr-4 py-4 rounded-xl border-l-4 border-purple-500 bg-white/[0.02] border border-l-purple-500">
      <Quote className="absolute top-3 right-3 text-purple-500/20 w-8 h-8" />
      <p className="text-zinc-200 text-lg italic leading-relaxed">{children}</p>
      {author && (
        <footer className="mt-3 text-right text-xs text-zinc-500 font-geistmono">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}
