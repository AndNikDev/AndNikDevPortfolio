"use client";

import { useState, useEffect, useCallback } from "react";
import { Heart } from "lucide-react";
import { getPostLikes, incrementPostLike } from "@/lib/blog-service";

export default function LikeButton({ slug }) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const storageKey = `andnik-liked-${slug}`;

  useEffect(() => {
    let active = true;
    setLiked(localStorage.getItem(storageKey) === "1");
    getPostLikes(slug).then((currentCount) => {
      if (active && typeof currentCount === "number") setCount(currentCount);
    });
    return () => {
      active = false;
    };
  }, [slug, storageKey]);

  const handleLike = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newCount = await incrementPostLike(slug);
      if (typeof newCount === "number") {
        setCount(newCount);
      } else {
        setCount((c) => c + 1);
      }
      if (!liked) {
        localStorage.setItem(storageKey, "1");
        setLiked(true);
      }
    } catch {
      setCount((c) => c + 1);
      localStorage.setItem(storageKey, "1");
      setLiked(true);
    } finally {
      setLoading(false);
    }
  }, [slug, liked, loading, storageKey]);

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all disabled:opacity-60"
      aria-label="Me gusta"
    >
      <Heart
        size={16}
        className={
          liked
            ? "fill-red-500 text-red-500 scale-110 transition-transform"
            : "text-zinc-400 transition-colors"
        }
      />
      <span className="font-geistmono">{count}</span>
    </button>
  );
}
