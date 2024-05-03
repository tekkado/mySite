import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import Angular from "../assets/angular.png";
import ReactLogo from "../assets/react.png";
import Node from "../assets/node.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#03547b] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ffde3b]">
            Skills
          </p>
          <p className="py-4 text-[#dae2e6]">Technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={Html} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img className="w-20 mt-2 mx-auto" src={Css} alt="Css Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={Js} alt="Js Icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img className="w-14 mt-2 mx-auto" src={Angular} alt="Angular Icon" />
            <p className="my-4">Angular</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={ReactLogo} alt="ReactLogo Icon"/>
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img className="w-16 mt-1 mx-auto" src={Node} alt="Node Icon" />
            <p className="my-4">NodeJS</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
