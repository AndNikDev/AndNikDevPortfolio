"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Sparkles } from "lucide-react";

import {
  SkillIconsGolang,
  SkillIconsRust,
  SkillIconsGraphqlDark,
  SkillIconsPostman,
  SkillIconsNeovimDark,
} from "@/images/icones-bags-jsx/IconsExports";

const icons = [
  SkillIconsGolang,
  SkillIconsRust,
  SkillIconsGraphqlDark,
  SkillIconsPostman,
  SkillIconsNeovimDark,
];

export default function NewSkills() {
  return (
    <Card className="group h-full p-3 sm:p-4">
      <CardHeader className="pb-1">
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="text-cyan-400" size={18} />
          <span>Deepening</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 relative pt-1">
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none"></div>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          speed={2200}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
          className="overflow-hidden"
          aria-label="Technologies I'm deepening"
        >
          {icons.map((Icon, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-11 opacity-70 hover:opacity-100 transition-opacity hover:scale-110 duration-300 cursor-pointer">
                <Icon className="w-8 h-8 drop-shadow-md" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
    </Card>
  );
}
