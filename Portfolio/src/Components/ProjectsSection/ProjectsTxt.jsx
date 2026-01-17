import React from "react";
import { motion } from "framer-motion";

const ProjectsTxt = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-cyan text-6xl mb-10 text-center font-bold"
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-white text-center text-lg max-w-[800px]"
      >
        I've worked on several projects that allowed me to apply my skills in
        real-world scenarios and strengthen my understanding of web development.
        Each project has helped me grow as a developer and tackle new challenges
        with confidence.
      </motion.p>
    </div>
  );
};

export default ProjectsTxt;
