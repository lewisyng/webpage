import React from "react";
import "./Home.sass";
import HomeProjects from "./HomeProjects";

import anime from 'animejs/lib/anime.es.js'

function Home() {
  return (
    <div className="home">
      <div className="home__name">
        Lewis <br /> Young
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
