import React from "react";
import styled from "styled-components";
import color from "../assets/styles/colors";

const StyledLinkButton = styled.a.attrs((props) => ({
  href: props.href,
  rel: props.rel,
  target: props.target,
}))`
  display: inline-block;
  margin: 2rem 0.5rem 2rem 0;
  padding: 0.7rem 1.3rem;
  border-radius: 10px;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover
    cursor: pointer;
    background-color: ${color.btnYellow};
    color: ${color.textDark};
        
  ${(props) =>
    props.variant === "outline" &&
    `

  `}

  ${(props) =>
    props.color === "dark"
      ? `
    background-color: ${color.textDark};
    color: ${color.textBright};
    transition: background-color, color 100ms ease-in-out;
    
    &:hover {
      background-color: ${color.textDark};
      color: ${color.textBright};
    }`
      : "bright"
      ? `
      background-color: ${color.btnYellow};
      color: ${color.textDark};
      font-weight: bold;
      transition: background-color, color 100ms ease-in-out;
      &:hover
        background-color: ${color.btnYellowHover};
        color: ${color.textDark};
        `
      : ""}
`;

function LinkButton({ href, color, rel, target, value, variant }) {
  return (
    <StyledLinkButton
      href={href}
      rel={rel}
      color={color}
      target={target}
      variant={variant}
    >
      {value}
    </StyledLinkButton>
  );
}

export default LinkButton;
