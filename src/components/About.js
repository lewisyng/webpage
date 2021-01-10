import React from "react";
import "./About.css";
import Portrait from "../assets/portrait.jpg";

function About() {
  return (
    <div id="about">
      <div className="pageHeader">Über</div>
      <div id="about__content">
        <div id="about__content__image">
          <img src={Portrait} alt="head" />
        </div>
        <div id="about__content__information">Coder</div>
      </div>
    </div>
  );
}

export default About;
