import React from "react";
import "./LinkButtons.sass";

function LinkButtons(props) {
  return (
    <a
      href={props.href}
      className={`linkButtons btn ${props.filled ? "filled" : ""}`}
      style={
        props.backgroundcolor === "blue"
          ? { backgroundColor: "#003cff", color: "white" }
          : {}
      }
      rel={props.rel}
      target={props.target}
    >
      {props.value}
    </a>
  );
}

export default LinkButtons;
