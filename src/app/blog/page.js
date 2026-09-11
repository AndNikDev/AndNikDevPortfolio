import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/blog/BlogCard";
import { PenLine } from "lucide-react";

export const metadata = {
  title: "Blog · AndNikDev",
  description:
    "Publicaciones sobre tecnologías, desarrollo frontend, Web3 y más de AndNikDev.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen text-white font-geist px-4 py-2 pt-28 overflow-x-hidden">
      <div className="w-full max-w-4xl mx-auto">
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-geistmono text-cyan-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4">
            <PenLine size={13} />
            Blog
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-geist mb-3">
            Últimas{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              publicaciones
            </span>
          </h1>
          <p className="text-zinc-400 font-geistmono text-sm">
            Notas, tutoriales y exploraciones sobre las tecnologías que uso.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
            <p className="text-zinc-400 font-geistmono">
              Aún no hay publicaciones. ¡Vuelve pronto!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
