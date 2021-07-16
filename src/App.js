import React, { useState } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Certificate from "./components/certificate/Certificate";
import Contact from "./components/contact/Contact";
import Menu from "./menu/Menu";
import "./app.css";
import { HiTerminal, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div className="app">
      <div className={"header " + (click && "active")}>
        <div className="container">
          <div className="header-con">
            <div className="logo">
              <a href="#intro">
                .jirawat
                <HiTerminal />
              </a>
            </div>
            <ul className="menu ">
              <li className="menu-link">
                <a href="#about">About</a>
              </li>
              <li className="menu-link">
                <a href="#certificate">Certificate</a>
              </li>
              <li className="menu-link">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
              {click ? <HiOutlineX /> : <HiOutlineMenu />}
            </div>
          </div>
        </div>
      </div>
      <Menu menuOpen={click} closeMobileMenu={closeMobileMenu} />
      <div className="sections">
        <Intro />
        <About />
        <Certificate />
        <Contact />
      </div>
    </div>
  );
}

export default App;
