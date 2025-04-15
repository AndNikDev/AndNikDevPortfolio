import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  SkillIconsGolang,
  SkillIconsGraphqlDark,
  SkillIconsNextjsDark,
  SkillIconsPostgresqlDark,
  SkillIconsPythonDark,
  SkillIconsRust,
  SkillIconsTypescript,
} from "@/images/icones-bags-jsx/IconsExports";

const icons = [
  SkillIconsGolang,
  SkillIconsGraphqlDark,
  SkillIconsNextjsDark,
  SkillIconsPostgresqlDark,
  SkillIconsPythonDark,
  SkillIconsRust,
  SkillIconsTypescript,
];

function NewSkills() {
  return (
    <div className="w-full  max-w-xl mx-auto text-center">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        loop={true}
        speed={1750}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
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

export default NewSkills;
