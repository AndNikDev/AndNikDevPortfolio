-- Schema para el blog de AndNikDev (ejecutar en Supabase SQL Editor)

-- Tabla de comentarios
create table if not exists public.comments (
  id bigint generated always as identity primary key,
  post_slug text not null,
  name text not null,
  content text not null,
  created_at timestamptz not null default now()
);

create index if not exists comments_post_slug_idx on public.comments (post_slug);

-- Tabla de likes (un registro por post con su contador)
create table if not exists public.post_likes (
  post_slug text primary key,
  count bigint not null default 0
);

-- RLS: lectura pública, escritura anónima limitada
alter table public.comments enable row level security;
alter table public.post_likes enable row level security;

create policy "Comments: public read"
  on public.comments for select using (true);

create policy "Comments: public insert"
  on public.comments for insert with check (true);

create policy "Post likes: public read"
  on public.post_likes for select using (true);

create policy "Post likes: public upsert"
  on public.post_likes for upsert using (true) with check (true);
