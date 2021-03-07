import React from "react";
import "./SocialLink.sass";

function SocialLink(props) {
  const { item } = props;

  return (
      <a
        className="socialLink"
        href={item.url}
        rel="noopener noreferrer"
        target={item.target}
      >
        <svg
          style={{ fill: "white" }}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          {item.icon}
        </svg>
      </a>
  );
}

export default SocialLink;
