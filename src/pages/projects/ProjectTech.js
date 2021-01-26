import React from "react";
import "./ProjectTech.sass";

function ProjectTech(props) {
  return (
    <div className="projectTech">
      <div className="projectTech__header">Technologien</div>
      <div className="projectTech__stack">
            {props.stack.map((item) => {
              return <div class="projectTech__stack__item" key={item}>{item}</div>;
            })}
      </div>
    </div>
  );
}

export default ProjectTech;
