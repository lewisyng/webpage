import React from "react";
import "./Projects.css";
import Project from "./Project";
import { projects } from "../../js/projects";

function Projects() {
  return (
    <div className="projects">
      <div className="pageHeader">Projekte</div>
      <div className="projects__list">
        {projects.map((item, i) => {
          return <Project key={i} project={item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
