export default function YouTubeEmbed({ id, title = "Video de YouTube" }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-black">
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
