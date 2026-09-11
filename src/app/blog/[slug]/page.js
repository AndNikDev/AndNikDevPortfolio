import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { mdxComponents } from "@/lib/mdx-components";
import { Card } from "@/components/ui/Card";
import PostHeader from "@/components/blog/PostHeader";
import ImageBlock from "@/components/blog/blocks/ImageBlock";
import LikeButton from "@/components/blog/interactions/LikeButton";
import CommentSection from "@/components/blog/interactions/CommentSection";
import ShareButtons from "@/components/blog/interactions/ShareButtons";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.meta.title} · AndNikDev Blog`,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      images: post.meta.cover ? [{ url: post.meta.cover }] : [],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const mdx = await MDXRemote({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <div className="min-h-screen text-white font-geist px-4 py-2 pt-24 overflow-x-hidden">
      <div className="w-full max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors font-geistmono mb-8"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <Card className="mb-6">
          {post.meta.cover && (
            <ImageBlock src={post.meta.cover} alt={post.meta.coverAlt || post.meta.title} />
          )}
          <PostHeader post={post} />
        </Card>

        <Card>
          <article className="text-base leading-relaxed">{mdx}</article>

          <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
            <LikeButton slug={post.slug} />
            <ShareButtons title={post.meta.title} />
          </div>

          <CommentSection slug={post.slug} />
        </Card>
      </div>
    </div>
  );
}
