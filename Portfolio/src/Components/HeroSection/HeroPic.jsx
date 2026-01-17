import { PiCircleThin } from "react-icons/pi";

export const HeroPic = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <img
        src="images/MyImage.png"
        width={"200px"}
        alt="Oussama Jarouid"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiCircleThin className="md:h-[50%] sm:h-[120%] min-h-[430px] w-auto text-cyan blur-md" />
      </div>
    </div>
  );
};
