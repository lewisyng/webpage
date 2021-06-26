import React from "react";
import "./About.sass";
// import Portrait from "../../assets/portrait.jpg";
import Portrait from "../../assets/portraitTransparent.png";
import LinkButtons from "../../components/LinkButton";
import codingImg from "../../assets/Coding2.svg";
import SocialLinks from "../../components/SocialLinks";
import Heading from "../../ui/Heading";
import Content from "../../ui/Content";
import Card from "../../ui/Card";
import color from "../../assets/styles/colors";

function About() {
  return (
    <div className="about">
      <div className="about__myself">
        <div className="about__myself__information">
          <Heading style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Hi! Ich heiße Lewis.
          </Heading>
          <Content
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.5",
              margin: "1rem 0",
            }}
          >
            Ich bin Frontend-Entwickler mit einer Leidenschaft für
            Digitalisierung, User Interfaces und der Demokratisierung von
            Technologie.
          </Content>
          <p className="medium"></p>
        </div>
        <LinkButtons
          value="Lernen wir uns kennen!"
          href="mailto:lewisyoung1306@yahoo.de"
          color="bright"
        />
        <SocialLinks />
        <img
          className="about__myself__image"
          src={Portrait}
          alt="portrait_picture"
        />
      </div>
      <div className="about__why">
        <div>
          <Heading
            color="dark"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              padding: "0 0 2rem 0",
            }}
          >
            Die Welt liegt im digitalen Umbruch
          </Heading>
          <Content style={{ padding: "0 0 1rem 0", fontSize: "1.3rem" }}>
            Mich faszinieren die Chancen, die sich aus dieser Entwicklung
            ergeben. Im Mittelpunkt stehen für mich Webtechnologien, da sie die
            Vernetzung aller Menschen und Lebensbereiche ermöglichen, sowie
            unzählige neue Geschäftsfelder erzeugen und alte revolutionieren.
          </Content>
          <Content style={{ fontSize: "1.3rem" }}>
            Ich liebe es neue Technologien zu lernen und damit selber auf die
            Digitalisierung Einfluss zu nehmen.
          </Content>
        </div>
        <img className="about__why__img" src={codingImg} alt="img" />
      </div>
      <div className="about__techStack">
        <Heading
          color="dark"
          style={{
            padding: "3rem 0",
            width: "100%",
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          Tech-Stack
        </Heading>
        {[
          "HTML",
          "CSS",
          "SASS",
          "JavaScript",
          "TypeScript",
          "ReactJS",
          "Bootstrap",
          "Material UI",
          "NextJS",
          "Storybook",
        ].map((item) => (
          <Card
            style={{
              height: "50px",
              width: "200px",
              backgroundColor: "#111111",
              color: color.textBright,
              fontSize: "125%",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={item}
          >
            {item}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default About;
