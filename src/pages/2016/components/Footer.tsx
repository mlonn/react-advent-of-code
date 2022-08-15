import React from "react";
import styled from "styled-components";

interface Props {}

const StyledSpan = styled.pre`
  margin: 0;
  color: #666;
`;

const Footer = (props: Props) => {
  return (
    <StyledSpan>
      {`  ==============//======+...+====================
  - - - - - - -// - - -/   / - - - - - - - - - -
==============//|==============================
             //|                                 `}
    </StyledSpan>
  );
};

export default Footer;
