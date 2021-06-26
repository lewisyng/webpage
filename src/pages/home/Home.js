import React from "react";
import LinkButton from "../../components/LinkButton";
import "./Home.sass";
import HomeProjects from "./HomeProjects";
import "aos/dist/aos.css";
import { homelinks } from "../../js/homelinks";
import SocialLink from "../../components/SocialLink";
import Particle from "./Particle";
import Heading from "../../ui/Heading";

function Home() {
  return (
    <div className="home">
      <Particle />
      <div className="home__aboveFold">
        <div className="home__aboveFold__title">
          <p className="one">Digitalisierung</p>
          <p className="two">Internet of Things</p>
          <p className="three">Frontend Entwicklung</p>
        </div>

        <div className="home__aboveFold__social">
          {homelinks.map((item) => (
            <SocialLink item={item} />
          ))}
        </div>
      </div>
      <HomeProjects />
      <div className="home__callToAction">
        <Heading
          align="center"
          color="dark"
          style={{ fontSize: "clamp(25px, 5vw, 50px)" }}
        >
          Sie gehen den Weg in die digitale Zukunft?
        </Heading>
        <Heading
          align="center"
          color="dark"
          style={{
            padding: "2rem 0 0 0",
            fontSize: "clamp(25px, 4vw, 35px)",
            fontWeight: "normal"
          }}
        >
          Dann wird es Zeit, dass wir uns
        </Heading>
        <LinkButton
          value="kennenlernen!"
          href="mailto:lewisyoung1306@yahoo.de"
          color="dark"
        />
      </div>
    </div>
  );
}

export default Home;
