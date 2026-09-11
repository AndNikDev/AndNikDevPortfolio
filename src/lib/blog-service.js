import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export async function getPostLikes(slug) {
  if (!isSupabaseConfigured || !supabase) return 0;
  try {
    const { data, error } = await supabase
      .from("post_likes")
      .select("count")
      .eq("post_slug", slug)
      .maybeSingle();

    if (error) {
      console.warn("Error getting likes:", error.message);
      return 0;
    }
    return data?.count || 0;
  } catch (err) {
    console.warn("Exception getting likes:", err);
    return 0;
  }
}

export async function incrementPostLike(slug) {
  if (!isSupabaseConfigured || !supabase) return null;
  try {
    const { data: existing } = await supabase
      .from("post_likes")
      .select("count")
      .eq("post_slug", slug)
      .maybeSingle();

    const nextCount = (existing?.count || 0) + 1;

    const { data, error } = await supabase
      .from("post_likes")
      .upsert({ post_slug: slug, count: nextCount }, { onConflict: "post_slug" })
      .select("count")
      .single();

    if (error) {
      console.warn("Error incrementing like:", error.message);
      return nextCount;
    }

    return data?.count || nextCount;
  } catch (err) {
    console.warn("Exception incrementing like:", err);
    return null;
  }
}

export async function getPostComments(slug) {
  if (!isSupabaseConfigured || !supabase) return [];
  try {
    const { data, error } = await supabase
      .from("comments")
      .select("id, name, content, created_at")
      .eq("post_slug", slug)
      .order("created_at", { ascending: true });

    if (error) {
      console.warn("Error getting comments:", error.message);
      return [];
    }

    return data || [];
  } catch (err) {
    console.warn("Exception getting comments:", err);
    return [];
  }
}

export async function addPostComment(slug, { name, content }) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase no está configurado");
  }

  const cleanName = String(name || "").trim().slice(0, 50);
  const cleanContent = String(content || "").trim().slice(0, 500);

  if (!cleanName || !cleanContent) {
    throw new Error("Nombre y contenido son requeridos");
  }

  const { data, error } = await supabase
    .from("comments")
    .insert({ post_slug: slug, name: cleanName, content: cleanContent })
    .select("id, name, content, created_at")
    .single();

  if (error) throw error;
  return data;
}
