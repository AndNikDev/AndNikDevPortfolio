import ImageBlock from "@/components/blog/blocks/ImageBlock";
import VideoBlock from "@/components/blog/blocks/VideoBlock";
import YouTubeEmbed from "@/components/blog/blocks/YouTubeEmbed";
import XEmbed from "@/components/blog/blocks/XEmbed";
import TikTokEmbed from "@/components/blog/blocks/TikTokEmbed";
import CodeBlock from "@/components/blog/blocks/CodeBlock";
import CarouselBlock from "@/components/blog/blocks/CarouselBlock";
import QuoteBlock from "@/components/blog/blocks/QuoteBlock";
import Callout from "@/components/blog/blocks/Callout";
import Link from "next/link";

function Paragraph({ children }) {
  return <p className="my-4 text-zinc-300 leading-relaxed">{children}</p>;
}

function Heading2({ children }) {
  return <h2 className="mt-8 mb-3 text-2xl font-bold text-white font-geist">{children}</h2>;
}

function Heading3({ children }) {
  return <h3 className="mt-6 mb-2 text-xl font-semibold text-white font-geist">{children}</h3>;
}

function Heading4({ children }) {
  return <h4 className="mt-5 mb-2 text-lg font-semibold text-white font-geist">{children}</h4>;
}

function UnorderedList({ children }) {
  return <ul className="my-4 space-y-2 list-disc list-outside pl-5 text-zinc-300 leading-relaxed marker:text-purple-400">{children}</ul>;
}

function OrderedList({ children }) {
  return <ol className="my-4 space-y-2 list-decimal list-outside pl-5 text-zinc-300 leading-relaxed marker:text-cyan-400">{children}</ol>;
}

function ListItem({ children }) {
  return <li className="leading-relaxed">{children}</li>;
}

function InlineCode({ children }) {
  return (
    <code className="px-1.5 py-0.5 rounded-md bg-white/10 text-cyan-300 font-geistmono text-[0.85em]">
      {children}
    </code>
  );
}

function Anchor({ href = "", children }) {
  const isExternal = href.startsWith("http") || href.startsWith("//");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-white/20 hover:decoration-cyan-400 transition-colors">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-white/20 hover:decoration-cyan-400 transition-colors">
      {children}
    </Link>
  );
}

function Table({ children }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm text-left text-zinc-300">{children}</table>
    </div>
  );
}

function TableHead({ children }) {
  return <thead className="bg-white/5 text-white font-geist">{children}</thead>;
}

function TableRow({ children }) {
  return <tr className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">{children}</tr>;
}

function TableCell({ children, ...props }) {
  return <td className="px-4 py-2.5 font-geistmono text-xs align-top" {...props}>{children}</td>;
}

function TableHeadCell({ children }) {
  return <th className="px-4 py-2.5 font-geistmono text-xs">{children}</th>;
}

function HorizontalRule() {
  return <hr className="my-8 border-white/10" />;
}

export const mdxComponents = {
    ImageBlock,
    VideoBlock,
    YouTubeEmbed,
    XEmbed,
    TikTokEmbed,
    CodeBlock,
    CarouselBlock,
    QuoteBlock,
    Callout,
    pre: CodeBlock,
    p: Paragraph,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    code: InlineCode,
    a: Anchor,
    table: Table,
    thead: TableHead,
    tr: TableRow,
    td: TableCell,
    th: TableHeadCell,
    hr: HorizontalRule,
  };
