import React from "react";
import { projects } from "../data/projectsData";
import { handleTileClick } from "../utils/handleTileClick";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen bg-[#03547b] text-white">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ffde3b]">
            Projects
          </p>
          <p className="py-4 text-[#dae2e6]">
            Here are some of my favourite projects/work!
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
        {projects.map((project, index) => (
            <div
              key={index}
              className="relative cursor-pointer group block"
              onClick={() => handleTileClick(project.deployed || project.github)}
            >
              <div className="shadow-md hover:scale-110 duration-200 w-full h-full">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
