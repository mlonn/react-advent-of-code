import React from "react";
import styled from "styled-components";

interface Props {}

const StyledSpan = styled.pre`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 0;
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
