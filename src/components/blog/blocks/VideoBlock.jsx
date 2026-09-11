export default function VideoBlock({ src, poster, caption }) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          className="w-full max-h-[500px] object-contain"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-zinc-500 font-geistmono">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
