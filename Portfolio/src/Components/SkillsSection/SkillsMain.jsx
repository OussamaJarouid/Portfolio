import React from "react";
import SkillsTxt from "./SkillsTxt";
import AllSkillsSM from "./AllSkillsSM";
import SkillsMarquee from "./SkillsMarquee";
import { AllSkills } from "./AllSkills";

export const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden flex flex-col justify-center">
        <SkillsTxt />
        <div className=" lg:mt- w-full relative">
          <SkillsMarquee />
        </div>
      </div>
    </div>
  );
};