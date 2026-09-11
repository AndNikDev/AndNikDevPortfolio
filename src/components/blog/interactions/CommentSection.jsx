"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Send, User } from "lucide-react";
import { getPostComments, addPostComment } from "@/lib/blog-service";

const inputClasses =
  "w-full bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-colors";

function formatDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}

export default function CommentSection({ slug }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    getPostComments(slug)
      .then((data) => {
        if (active) setComments(Array.isArray(data) ? data : []);
      })
      .catch(() => {})
      .finally(() => active && setLoaded(true));
    return () => {
      active = false;
    };
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !content.trim() || sending) return;
    setSending(true);
    try {
      const data = await addPostComment(slug, { name, content });
      if (data) {
        setComments((prev) => [...prev, data]);
        setContent("");
      }
    } catch {
      // silencioso
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mt-10">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-white font-geist mb-4">
        <MessageCircle size={18} className="text-cyan-400" />
        Comentarios ({comments.length})
      </h3>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-white/10 bg-white/[0.02] p-4 mb-6 space-y-3"
      >
        <div className="relative">
          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            maxLength={50}
            className={`${inputClasses} pl-9`}
          />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe un comentario..."
          rows={3}
          maxLength={500}
          className={`${inputClasses} resize-none`}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={sending || !name.trim() || !content.trim()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send size={14} />
            Publicar
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {loaded && comments.length === 0 && (
          <p className="text-sm text-zinc-500 font-geistmono text-center py-4">
            Sin comentarios aún. ¡Sé el primero!
          </p>
        )}
        {comments.map((comment) => (
          <div
            key={comment.id || `${comment.name}-${comment.created_at}`}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500/30 to-cyan-500/30 border border-white/10 flex items-center justify-center text-xs text-white font-geistmono uppercase">
                {comment.name?.charAt(0) || "?"}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white font-geist">{comment.name}</p>
                <p className="text-[11px] text-zinc-500 font-geistmono">
                  {formatDate(comment.created_at)}
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap break-words">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
