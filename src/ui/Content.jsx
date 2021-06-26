import React from "react";
import styled from "styled-components";

const StyledContent = styled.p`
line-height: 1.5;
  ${(props) => props.style}
`;

function Content({ children, style, ...props }) {
  return <StyledContent style={style}>{children}</StyledContent>;
}

export default Content;
