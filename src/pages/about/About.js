import React from "react";
import "./About.css";
import Portrait from "../../assets/portrait.jpg";

function About() {
  return (
    <div className="about">
      <div className="pageHeader">Über mich</div>
      <div className="about__content">
        <img
          className="about__content__image"
          src={Portrait}
          alt="portrait_picture"
        />
        <div className="about__content__information">
          <span className="large">
            Hi! <br/>Ich heiße Lewis. <br /> <br />
          </span>
          <span className="medium">
            Die Welt ist im digitalen Umbruch... und wir sind mitten drin!
            <br /> <br />
            Mich faszinieren die Chancen, die sich aus dieser Entwicklung ergeben. <br />
            Im Mittelpunkt stehen für mich Webtechnologien, da sie die Vernetzung
            aller Menschen und Lebensbereiche ermöglichen, sowie unzählige neue Geschäftsfelder erzeugen und alte 
            revolutionieren. <br /> <br/>
            Ich liebe es neue Technologien zu lernen und damit selber auf die Digitalisierung Einfluss zu nehmen.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
