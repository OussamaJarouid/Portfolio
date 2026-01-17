import { motion } from "framer-motion";
import { Skills } from "./SkillsData";
import { SingleSkill } from "./SingleSkill";

const SkillsMarquee = () => {
  return (
    <div className="flex w-full overflow-hidden mask-image-gradient py-10 relative">
      <motion.div
        className="flex flex-shrink-0 gap-20 pr-20"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {Skills.map((item, idx) => {
          return (
            <SingleSkill key={idx} skill={item.skill} icon={<item.icon />} />
          );
        })}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0 gap-20 pr-20"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
         {Skills.map((item, idx) => {
          return (
            <SingleSkill key={`clone-${idx}`} skill={item.skill} icon={<item.icon />} />
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
