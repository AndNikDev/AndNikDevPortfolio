export default function TikTokEmbed({ id, title = "Video de TikTok" }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
      <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: 700 }}>
        <iframe
          src={`https://www.tiktok.com/embed/v2/${id}`}
          title={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
