import React from "react";
import "./Home.css";
import SocialLinks from "../../components/SocialLinks";
import Projects from "../projects/Projects";

function Home() {
  return (
    <div className="home">
      <div className="home__name">
        Lewis <br /> Young
      </div>
      <SocialLinks />
      <Projects />
    </div>
  );
}

export default Home;
