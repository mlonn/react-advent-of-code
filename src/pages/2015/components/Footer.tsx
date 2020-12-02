import React from "react";
import styled from "styled-components";

interface Props {}

const StyledSpan = styled.span`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const Footer = (props: Props) => {
  return (
    <StyledSpan>
      <span>{"|   |"}</span>
      <span>{"|   |"}</span>
      <span>{"_ _ __ ___|___|___ __ _ _"}</span>
    </StyledSpan>
  );
};

export default Footer;
