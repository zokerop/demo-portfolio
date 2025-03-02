import Top from "./components/Top";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./app.css";
import Menu from "./components/Menu";
import { useState } from "react";
import Testimonials from "./components/Testimonials";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-screen">
      <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="w-full sec ">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials/>
        <Contact />
      </div>
    </div>
  );
};

export default App;
