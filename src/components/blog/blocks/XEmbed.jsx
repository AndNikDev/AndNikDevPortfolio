export default function XEmbed({ id, title = "Publicación de X/Twitter" }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <iframe
          src={`https://platform.twitter.com/embed/Tweet.html?id=${id}`}
          title={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
