import React from "react";
import homeprojects from "../../js/homeprojects";
import "./HomeProjects.sass";

function HomeProjects() {
  return (
    <div className="homeProjects__container">
      <div className="hp__header header">Meine aktuellen Projekte</div>
      <div className="homeProjects">
        {homeprojects.map((item) => {
          return (
            <div key={item.id} className={`hp__row ${item.size}`}>
              <div
                className="homeProjects__background"
                style={{
                  backgroundImage: `url(${item.backgroundImg})`,
                }}
              >
                <div className="hp__infos">
                  <div className="hp__infos__header">{item.name}</div>
                  <div className="hp__infos__body">{item.description}</div>
                  <div className="hp__infos__buttons">
                    <a
                      className="customButton"
                      href={item.githubLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                    <a
                      className="customButton filled"
                      href={item.pageLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ausprobieren
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeProjects;
