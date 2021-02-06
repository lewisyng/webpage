import React from "react";
import LinkButtons from "../../assets/LinkButtons";
import "./Home.sass";
import HomeProjects from "./HomeProjects";

function Home() {
  return (
    <div className="home">
      <div className="home__aboveFold">
        <div className="home__name">
          Lewis <br /> Young
        </div>
      </div>
      <HomeProjects />
      <div className="home__callToAction">
        <span>
          <strong>Sie gehen den Weg in die digitale Zukunft?</strong>
        </span>
        <LinkButtons
          value="Dann sollten wir uns kennenlernen!"
          href="mailto:lewisyoung1306@yahoo.de"
          rel=""
          target=""
          filled={true}
          backgroundcolor="blue"
        />
      </div>
    </div>
  );
}

export default Home;
