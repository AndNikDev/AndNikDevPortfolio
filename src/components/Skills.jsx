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
    <section className="w-full max-w-xl mx-auto">
      <header>
        <h1 className="text-2xl font-geist mb-4">
          {"<"}
          <span className="underline">Skills</span>
          {"/>"}
        </h1>
      </header>

      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        speed={1750}
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
            <div className="flex justify-center items-center h-24">
              <Icon className="w-12 h-12" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Skills;
