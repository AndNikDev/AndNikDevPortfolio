import React from "react";
import {
  SkillIconsGolang,
  SkillIconsGraphqlDark,
  SkillIconsNeovimDark,
  SkillIconsNextjsDark,
  SkillIconsPostgresqlDark,
  SkillIconsPostman,
  SkillIconsPythonDark,
  SkillIconsRust,
  SkillIconsTypescript,
} from "@/images/icones-bags-jsx/IconsExports";

function NewSkills() {
  return (
    <>
      <h1 className="h-10">New Skills</h1>
      <div className="w-full max-w-xs mx-auto grid grid-cols-4 gap-3 justify-items-center">
        <SkillIconsGolang className="w-full h-auto max-w-10" />
        <SkillIconsGraphqlDark className="w-full h-auto max-w-10" />
        <SkillIconsNeovimDark className="w-full h-auto max-w-10" />
        <SkillIconsNextjsDark className="w-full h-auto max-w-10" />
        <SkillIconsPostgresqlDark className="w-full h-auto max-w-10" />
        <SkillIconsPostman className="w-full h-auto max-w-10" />
        <SkillIconsPythonDark className="w-full h-auto max-w-10" />
        <SkillIconsRust className="w-full h-auto max-w-10" />
        <SkillIconsTypescript className="w-full h-auto max-w-10" />
      </div>
    </>
  );
}

export default NewSkills;
