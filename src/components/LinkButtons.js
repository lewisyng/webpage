import React from "react";
import "./LinkButtons.sass";

function LinkButtons(props) {
  return (
    <a
      href={props.href}
      className={`linkButtons btn ${
        props.color === "dark" ? "dark" : "bright"
      }`}
      rel={props.rel}
      target={props.target}
    >
      {props.value}
    </a>
  );
}

export default LinkButtons;
