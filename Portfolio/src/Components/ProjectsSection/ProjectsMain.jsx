import React from "react";
import ProjectsTxt from "./ProjectsTxt";
import SingleProject from "./SingleProject";
import ProjectDetails from "./ProjectsData";

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] px-4 mx-auto mt-[100px] mb-20">
      <ProjectsTxt />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {ProjectDetails.map((item, idx) => {
          return (
            <SingleProject
              key={idx}
              name={item.name}
              image={item.image}
              year={item.year}
              aligne={item.aligne}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
