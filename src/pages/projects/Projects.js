import React from "react";
import "./Projects.css";
import Project from "./Project";
import { projects } from "../../js/projects";

function Projects() {
  return (
    <>
      <div className="pageHeader">Projekte</div>
      <div className="projects">
        {projects.map((item, i) => {
          return <Project key={i} project={item} />;
        })}
      </div>
    </>
  );
}

export default Projects;
