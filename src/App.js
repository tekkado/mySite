import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const[nav, setNav] = useState(false);

  return (
    <div>
      <Navbar nav={nav} setNav={setNav}/>
      <Home/>
      <About/>
      <Skills/>
      <Projects nav={nav}/>
      <Contact/>
    </div>
  );
}

export default App;
