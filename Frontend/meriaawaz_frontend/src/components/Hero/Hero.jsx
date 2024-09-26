import React from "react";
import "./Hero.css";
import logo from "../../assets/logoimg.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left-side">
        <div className="text">
          <h1>Meri Awaz</h1>
          <p>
            <b>Meri Aawaz</b> is an{" "}
            <i> interactive civic management platform</i>
            designed to empower citizens by providing a straightforward and
            efficient way to report and track local civic issues. Whether it's a
            pothole on your street, a broken streetlight, or a waste management
            concern, Meri Aawaz serves as your voice in the community.
          </p>
        </div>
        <div className="flex_btns">
          <button className="Report_problem">Report problem</button>
          <button className="Report_problem">Problems </button>
        </div>
      </div>
      <div className="hero-right-side">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
