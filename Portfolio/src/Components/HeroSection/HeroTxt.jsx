import { HiOutlineDownload } from "react-icons/hi";
import { Buttons } from "../../ui/Buttons";

export const HeroTxt = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "CV/CV.pdf";
    link.download = "OussamJarouidCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Front-End Web Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        Oussama Jarouid
      </h1>
      <p className="text-lg mt-4 max-w-[600px] text-white">
        Passionate digital developer graduated from OFPPT, skilled in multiple
        programming languages and up-to-date with the latest technologies. Ready
        to apply my skills and creativity to innovative projects. Currently open
        to internship or job opportunities.
      </p>
      <div className="flex sm:justify-center md:justify-start">
        <Buttons className="w-[300px]" onClick={downloadFile}>
          <span>Download My Resume </span>
          <HiOutlineDownload className="sm:hidden md:block" size={20} />
        </Buttons>
      </div>
    </div>
  );
};
