import React from "react";
import "./SocialLink.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink(props) {
  const { item } = props;

  return (
    <div className="socialLink">
        <a
          onMouseOut={props.mouseOutOfLink}
          onMouseOver={() => props.handleMouseOverLink(item.name)}
          className="socialLink"
          href={item.url}
          rel="noopener noreferrer"
          target={item.target}
        >
          <FontAwesomeIcon size="4x" icon={item.icon} color="white" />
        </a>
    </div>
  );
}

export default SocialLink;
