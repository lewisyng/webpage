import React from "react";
import "./ProjectThumbnail.css";

function ProjectThumbnail(props) {
  return (
    <div className="projectThumbnail">
      <img src={props.src} alt={props.name} />
    </div>
  );
}

export default ProjectThumbnail;
