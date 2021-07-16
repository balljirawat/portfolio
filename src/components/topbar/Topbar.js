import React, { useState } from "react";
import "./Topbar.css";
import { HiTerminal, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Topbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    const closeMobileMenu = () => {
      setClick(false);
    };
  };
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            .jirawat <HiTerminal />
          </a>
          <div className="itemContainer">
            <span>
              <a href="#about">About</a>
            </span>
          </div>
          <div className="itemContainer">
            <span>
              <a href="#certificate">Certificate</a>
            </span>
          </div>
          <div className="itemContainer">
            <span>
              <a href="#contact">Contact</a>
            </span>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}
