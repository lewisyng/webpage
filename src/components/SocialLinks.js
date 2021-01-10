import React, { useState } from "react";
import { homelinks } from "../js/homelinks";
import SocialLink from "./SocialLink";
import "./SocialLinks.css";

function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="socialLinks">
      <div className="socialLink__name">{hoveredLink}</div>
      <div className="socialLinks__list">
        {homelinks.map((item) => {
          return (
            <SocialLink
              mouseOutOfLink={() => setHoveredLink(null)}
              handleMouseOverLink={(val) => setHoveredLink(val)}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SocialLinks;
