import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, FolderGit2 } from "lucide-react";
import { author } from "@/lib/site";
import { formatDate } from "@/lib/posts";

function readingTime(content) {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default function PostHeader({ post }) {
  const { meta, content } = post;
  const minutes = readingTime(content);

  return (
    <header>
      {meta.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.tags.map((tag) => (
            <Link
              key={tag}
              href="/blog"
              className="text-xs font-geistmono px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10 hover:border-purple-500/40 hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold text-white font-geist leading-tight mb-4">
        {meta.title}
      </h1>

      {meta.excerpt && (
        <p className="text-base md:text-lg text-zinc-400 font-geistmono leading-relaxed mb-5">
          {meta.excerpt}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-geistmono mb-2">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={13} className="text-cyan-400" />
          {formatDate(meta.date)}
        </span>
        <span className="w-1 h-1 rounded-full bg-zinc-600" />
        <span className="inline-flex items-center gap-1.5">
          <Clock size={13} className="text-purple-400" />
          {minutes} min de lectura
        </span>
        <span className="w-1 h-1 rounded-full bg-zinc-600" />
        <span className="inline-flex items-center gap-1.5">
          <FolderGit2 size={13} className="text-emerald-400" />
          Blog
        </span>
      </div>

      <Link
        href={author.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 mt-4 group"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-purple-500/50 transition-colors">
          <Image
            src={author.avatar}
            alt={author.name}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-white font-geist group-hover:text-purple-300 transition-colors">
            {author.name}
          </p>
          <p className="text-xs text-zinc-500 font-geistmono">@{author.username}</p>
        </div>
      </Link>
    </header>
  );
}
