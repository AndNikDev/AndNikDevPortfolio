"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CarouselBlock({ images }) {
  const slides = Array.isArray(images) ? images : [];

  if (slides.length === 0) return null;

  return (
    <div className="my-6">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={8}
        slidesPerView={1}
        loop={slides.length > 1}
        autoplay={slides.length > 1 ? { delay: 4000, disableOnInteraction: false } : false}
        pagination={{ clickable: true }}
        navigation
        className="rounded-xl overflow-hidden border border-white/10"
      >
        {slides.map((slide, i) => {
          const src = typeof slide === "string" ? slide : slide?.src;
          const caption = typeof slide === "string" ? "" : slide?.caption;
          return (
            <SwiperSlide key={i}>
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={src}
                  alt={caption || `Slide ${i + 1}`}
                  fill
                  sizes="(max-width: 1200px) 100vw"
                  className="object-cover"
                />
              </div>
              {caption && (
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-xs text-zinc-300 text-center">
                  {caption}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
