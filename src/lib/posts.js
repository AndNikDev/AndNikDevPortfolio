import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src", "content", "posts");

function ensureDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getPostSlugs() {
  ensureDirectory();
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    meta: {
      title: data.title || slug,
      date: data.date ? new Date(data.date) : null,
      excerpt: data.excerpt || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      cover: data.cover || null,
      coverAlt: data.coverAlt || "",
      published: data.published !== false,
    },
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map(getPostBySlug)
    .filter((post) => post && post.meta.published)
    .sort((a, b) => {
      const da = a.meta.date ? a.meta.date.getTime() : 0;
      const db = b.meta.date ? b.meta.date.getTime() : 0;
      return db - da;
    });
}

export function getRecentPosts(count = 3) {
  return getAllPosts().slice(0, count);
}

export function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
