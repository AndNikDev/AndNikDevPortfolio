"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Code2 } from "lucide-react";

import {
  SkillIconsBashDark,
  SkillIconsCss,
  SkillIconsGit,
  SkillIconsGithubDark,
  SkillIconsHtml,
  SkillIconsJavaDark,
  SkillIconsJavascript,
  SkillIconsLinuxDark,
  SkillIconsMongodb,
  SkillIconsMysqlDark,
  SkillIconsNodejsDark,
  SkillIconsReactDark,
} from "@/images/icones-bags-jsx/IconsExports";

const icons = [
  SkillIconsBashDark, SkillIconsCss, SkillIconsGit, SkillIconsGithubDark, 
  SkillIconsHtml, SkillIconsJavaDark, SkillIconsJavascript, SkillIconsLinuxDark, 
  SkillIconsMongodb, SkillIconsMysqlDark, SkillIconsNodejsDark, SkillIconsReactDark,
];

export default function Skills() {
  return (
    <Card className="group h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 className="text-purple-400" size={24} />
          <span>Core Skills</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 relative">
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none"></div>
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="overflow-hidden"
          aria-label="Skills carousel"
        >
          {icons.map((Icon, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-16 opacity-70 hover:opacity-100 transition-opacity hover:scale-110 duration-300 cursor-pointer">
                <Icon className="w-10 h-10 drop-shadow-md" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
    </Card>
  );
}
