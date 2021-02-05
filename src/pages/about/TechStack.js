import React from "react";
import techStack from "../../js/techstack";
import "./TechStack.sass";

function TechStack() {
  return (
    <div className="techStack">
      <div className="techStack__header header">Mein Techstack</div>
      <div className="techStack__list">
        {techStack.map((item) => {
          return (
            <div className="techStack__item" key={item.name}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
