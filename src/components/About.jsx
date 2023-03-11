import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div name="about" className="w-full h-screen bg-[#03547b] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-5 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffde3b]">
              About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-[#dae2e6]">
            <p ref={ref} className={`fade-in ${inView ? "is-visible" : ""}`}>
              Let me tell you a little bit about myself.
            </p>
          </div>
          <div className="pr-6">
            <p ref={ref} className={`fade-in ${inView ? "is-visible" : ""}`}>
              Hi, I'm currently studying the Design and Analysis of Algorithms
              while also exploring Full Stack Web Development in my free time.
              When I'm not coding, I enjoy creating my own projects, playing
              sports with friends, and unwinding with video games. 
              <br/>
              <br/>
              As a versatile and adaptable learner, I'm seeking Software
              Engineer/Developer Intern roles where I can contribute my
              creativity, passion, and technical expertise to an exciting
              project or team. Feel free to explore my website and get in touch
              if you have any questions or opportunities to discuss!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
