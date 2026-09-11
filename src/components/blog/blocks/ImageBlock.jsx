import Image from "next/image";

export default function ImageBlock({ src, alt = "", caption, rounded = true }) {
  return (
    <figure className="my-6">
      <div
        className={`overflow-hidden border border-white/10 bg-white/[0.02] ${
          rounded ? "rounded-xl" : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
          quality={90}
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
