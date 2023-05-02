import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div>
      <Navbar/>
      <LogIn/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
