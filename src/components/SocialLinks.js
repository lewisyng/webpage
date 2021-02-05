import React, { useState } from "react";
import { homelinks } from "../js/homelinks";
import SocialLink from "./SocialLink";
import "./SocialLinks.sass";

function SocialLinks() {
  return (
    <div className="socialLinks">
      <div className="socialLinks__list">
        {homelinks.map((item) => {
          return <SocialLink item={item} />;
        })}
      </div>
    </div>
  );
}

export default SocialLinks;
