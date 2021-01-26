import React from "react";
import "./ProjectTitle.sass";

function ProjectTitle(props) {
  return <div className="projectTitle">{props.name}</div>;
}

export default ProjectTitle;
