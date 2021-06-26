import React from "react";
import styled from "styled-components";

const StyledCard = styled.div.attrs((props) => ({
  "data-aos": props.fade,
}))`
  width: 100%;
  margin: 0 0 1rem 0;
  ${(props) =>
    props.size === "half" &&
    `
      width: 49.5%;
      @media (max-width: 700px) {
        width: 100%;
    }
    `}
  ${(props) => props.style}
`;

function Card({ children, style, ...props }) {
  return (
    <StyledCard
      fade={props.fade}
      style={style}
      size={props.size}
      className="card"
    >
      {children}
    </StyledCard>
  );
}

export default Card;
