import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/posts";

export default function BlogCard({ post }) {
  const { slug, meta } = post;

  return (
    <Link href={`/blog/${slug}`} className="block group h-full">
      <Card className="h-full flex flex-col group-hover:border-purple-500/40 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
        {meta.cover && (
          <div className="relative -m-5 mb-4 h-44 overflow-hidden rounded-t-2xl">
            <Image
              src={meta.cover}
              alt={meta.coverAlt || meta.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="flex flex-col flex-1">
          {meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-geistmono px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-lg font-semibold text-white font-geist leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
            {meta.title}
          </h3>

          {meta.date && (
            <div className="flex items-center gap-1.5 mt-2 text-xs text-zinc-500 font-geistmono">
              <Calendar size={13} className="text-cyan-400" />
              {formatDate(meta.date)}
            </div>
          )}

          {meta.excerpt && (
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-3">
              {meta.excerpt}
            </p>
          )}

          <div className="mt-4 flex items-center gap-1.5 text-sm text-cyan-400 font-geist">
            Leer más
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
