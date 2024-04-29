import React from "react";
import resumePDF from "../assets/resume.pdf";

const Home = () => {
  return (
    <div name="homepage" className="w-full h-screen bg-[#03547b]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl sm:text-2xl text-[#ffde3b]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Shams Minal Rahman
        </h1>
        <h2 className="text-xl sm:text-4xl font-bold text-[#dae2e6] py-1">
          I'm a Computer Science Graduate from York University.
        </h2>
        <p className="text-[#dae2e6] py-4 max-w-[700px]">
          Welcome to my website! I use this site to continuously work and
          improve on my full-stack development skills.
        </p>

        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ffde3b] hover:text-[#0a192f] hover:border-[#03547b]" onClick={() => window.open(resumePDF)}>
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
