import React from "react";
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

function Skills() {
  return (
    <>
      <h1 className="h-10">Skills</h1>
      <div className="w-full max-w-xs mx-auto grid grid-cols-4 gap-3 justify-items-center">
        <SkillIconsBashDark className="w-full h-auto max-w-10" />
        <SkillIconsCss className="w-full h-auto max-w-10" />
        <SkillIconsGit className="w-full h-auto max-w-10" />
        <SkillIconsGithubDark className="w-full h-auto max-w-10" />
        <SkillIconsHtml className="w-full h-auto max-w-10" />
        <SkillIconsJavaDark className="w-full h-auto max-w-10" />
        <SkillIconsJavascript className="w-full h-auto max-w-10" />
        <SkillIconsLinuxDark className="w-full h-auto max-w-10" />
        <SkillIconsMongodb className="w-full h-auto max-w-10" />
        <SkillIconsMysqlDark className="w-full h-auto max-w-10" />
        <SkillIconsNodejsDark className="w-full h-auto max-w-10" />
        <SkillIconsReactDark className="w-full h-auto max-w-10" />
      </div>
    </>
  );
}

export default Skills;
