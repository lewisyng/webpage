import React from "react";
import styled from "styled-components";
import color from "../assets/styles/colors";

const StyledHeading = styled.h1`
  ${(props) => props.style}
  color: ${(props) =>
    props.color === "bright" ? color.textBright : color.textDark};
  ${(props) =>
    props.align === "left" ? "text-align: left" : "text-align: center"};
`;

function Heading({
  children,
  color = "bright",
  style,
  align = "left",
  ...props
}) {
  return (
    <StyledHeading color={color} style={style} align={align} {...props}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
