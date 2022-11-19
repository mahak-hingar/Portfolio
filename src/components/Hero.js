import "./Hero.css";
import React from "react";
import Intro from "../images/intro.jpg"
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Intro} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Hero;
