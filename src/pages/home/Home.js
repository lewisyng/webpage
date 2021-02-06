import React from "react";
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
        Du gehst den Weg in die digitale Zukunft?
        <a href="mailto:lewisyoung@yahoo.de">Dann schreib' mir!</a>
      </div>
    </div>
  );
}

export default Home;
