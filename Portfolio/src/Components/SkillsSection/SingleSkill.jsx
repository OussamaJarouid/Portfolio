
export const SingleSkill = ({ skill, icon }) => {
  return (
    <div className="flex flex-col items-center gap-4 relative group">
      <div className="relative text-cyan hover:text-orange h-[120px] w-[120px] bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-6xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg group-hover:shadow-cyan/50 cursor-pointer">
        {icon}
        <div className="absolute inset-0 rounded-full border border-cyan/0 group-hover:border-cyan/50 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100 animate-pulse"></div>
      </div>
      <p className="text-white font-bold text-xl group-hover:text-cyan transition-colors duration-300">
        {skill}
      </p>
    </div>
  );
};
