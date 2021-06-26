import React from "react";
import LinkButton from "../../components/LinkButton";
import homeprojects from "../../js/homeprojects";
import Card from "../../ui/Card";
import "./HomeProjects.sass";
import Heading from "../../ui/Heading";
import Content from "../../ui/Content";
import color from "../../assets/styles/colors";

function HomeProjects() {
  return (
    <div className="homeProjects__container">
      <Heading
        color="dark"
        style={{ fontSize: "clamp(35px, 5vw, 60px)", padding: "2rem 0 3rem 0" }}
      >
        Meine Projekte
      </Heading>
      <div className="homeProjects">
        {homeprojects.map((homeproject) => (
          <Card
            style={{
              "background-repeat": "no-repeat",
              "background-position": "center",
              "background-size": "cover",
              "background-color": color.primaryBackgroundColor,
              "border-radius": "15px",
              backgroundImage: `url(${homeproject.backgroundImg})`,
            }}
            fade="fade-up"
            key={homeproject.id}
            size={homeproject.size}
          >
            <div className="hp__infos">
              <Heading style={{ "text-shadow": "0 0 5px #575757" }}>
                {homeproject.name}
              </Heading>
              <Content style={{ "text-shadow": "0 0 5px #575757" }}>
                {homeproject.description}
              </Content>
              <div className="hp__infos__buttons">
                <LinkButton
                  value="Github"
                  href={homeproject.githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  color="bright"
                >
                  Github
                </LinkButton>
                <LinkButton
                  value="Ausprobieren"
                  href={homeproject.pageLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  color="bright"
                >
                  Github
                </LinkButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomeProjects;
