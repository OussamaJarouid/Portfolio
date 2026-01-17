import { motion } from "framer-motion";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, image, aligne, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan/20 transition-all duration-300 group"
    >
      {/* Image Container */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 bg-darkBrown/80 px-3 py-1 rounded-full border border-cyan/30">
          <span className="text-cyan text-xs font-bold">{year}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors duration-300">
          {name}
        </h2>
        {/* Decorative line */}
        <div className="w-12 h-1 bg-gradient-to-r from-cyan to-orange rounded-full mb-4"></div>
        
        <div className="mt-auto pt-4 flex justify-between items-center">
             <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-orange transition-colors duration-300 group/link"
            >
              <span className="text-sm font-semibold uppercase tracking-wider">View Project</span>
              <BiSolidRightTopArrowCircle className="text-xl group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
            </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
