import React from "react";
import "./About.sass";
import Portrait from "../../assets/portrait.jpg";
import TechStack from "./TechStack";
import LinkButtons from "../../assets/LinkButtons";
import codingImg from "../../assets/Coding2.svg"

function About() {
  return (
    <div className="about">
      <div className="about__myself">
        <img
          className="about__myself__image"
          src={Portrait}
          alt="portrait_picture"
        />
        <div className="about__myself__information">
          <div className="large">
            Hi! Ich heiße Lewis. <br />
            <div className="medium">
              Ich bin Frontend-Entwickler mit einer Leidenschaft für
              Digitalisierung und der Demokratisierung von Technologie.
            </div>
          </div>
          <div className="contactBtn">
            <LinkButtons
              value="Schreiben Sie mir!"
              href="mailto:lewisyoung1306@yahoo.de"
              rel=""
              target=""
              filled={true}
            />
          </div>
        </div>
      </div>
      <div className="about__why">
        <div>
          <strong>
            Die Welt liegt im digitalen Umbruch... und wir sind mitten drin!
          </strong>
          <br /> <br />
          Mich faszinieren die Chancen, die sich aus dieser Entwicklung ergeben.
          Im Mittelpunkt stehen für mich Webtechnologien, da sie die Vernetzung
          aller Menschen und Lebensbereiche ermöglichen, sowie unzählige neue
          Geschäftsfelder erzeugen und alte revolutionieren.
          <br /> <br />
          Ich liebe es neue Technologien zu lernen und damit selber auf die
          Digitalisierung Einfluss zu nehmen.
        </div>
        <img className="about__why__img" src={codingImg} alt="img" />
      </div>
      <div className="about__techStack">
        <div className="subHeader">Mein Technologie-Stack</div>
        <TechStack />
      </div>
    </div>
  );
}

export default About;
