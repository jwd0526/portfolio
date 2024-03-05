import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="nav-format">
      <div className="nav-inner-format">
        <div className="nav-item home">
          <a>Home</a>
        </div>
        <div className="nav-item about">
          <a href="#about">About</a>
        </div>
        <div className="nav-item projects">
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-item resume">
          <a href="#resume">Resume</a>
        </div>
        <div className="nav-item extra">
          <a href="#extra">Extra</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
