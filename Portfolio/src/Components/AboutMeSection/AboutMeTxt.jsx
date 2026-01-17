import React from "react";
import { Buttons } from "../../ui/Buttons";

const AboutMeTxt = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="uppercase text-cyan text-6xl ">About Me</h2>
      <p className="text-white max-w-[700px] mt-8">
        I'm a passionate front-end developer with a strong foundation in modern
        web technologies.
        <br />
        I've built several projects using HTML, CSS, and JavaScript, and
        specialize in creating dynamic, responsive interfaces with ReactJS,
        Redux, and TypeScript.
        <br />
        <br />
        My experience includes working with tools like React Query for efficient
        data fetching and YUP for robust form validation.
        <br />
        On the design side, I enjoy crafting clean and intuitive user interfaces
        using Tailwind CSS, and Chakra UI.
        <br />
        <br />
        I'm constantly learning and love turning ideas into real, user-friendly
        applications.
        <br />
        Whether I'm collaborating on a team or working independently, I aim to
        write scalable, maintainable code and deliver polished user experiences.
      </p>

      <Buttons className="mt-[20px] w-full">
        <a href="https://github.com/OussamaJarouid/" target="_blank">
          My Projects
        </a>
      </Buttons>
    </div>
  );
};

export default AboutMeTxt;
