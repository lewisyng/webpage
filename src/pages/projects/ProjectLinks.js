import React from "react";
import "./ProjectLinks.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ProjectLinks(props) {
  const { links } = props;

  return (
    <div className="projectLinks">
      <a
        className="projectLink"
        href={links.webpage}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon size="2x" icon={faExternalLinkAlt} color="#808080" />
      </a>
      <a
        className="projectLink"
        href={links.github}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon size="2x" icon={faGithub} color="#808080" />
      </a>
    </div>
  );
}

export default ProjectLinks;
