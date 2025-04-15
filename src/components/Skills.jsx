import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
];

function Skills() {
  return (
    <div className="w-full max-w-xl mx-auto text-center">
      <h1 className="text-2xl geist-font mb-4">Skills</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        loop={true}
        speed={1750} // ¡Esto es la clave!
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="overflow-hidden"
      >
        {icons.map((Icon, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-24">
              <Icon className="w-12 h-12" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Skills;
