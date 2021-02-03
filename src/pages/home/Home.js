import React from "react";
import "./Home.sass";
import SocialLinks from "../../components/SocialLinks";
import Projects from "../projects/Projects";
import HomeProjects from "./HomeProjects";

function Home() {
  return (
    <div className="home">
      <div className="home__name">
        Lewis <br /> Young
      </div>
      <SocialLinks />
      <HomeProjects />
    </div>
  );
}

export default Home;
