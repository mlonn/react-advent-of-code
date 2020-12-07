import React from "react";
import styled from "styled-components";

interface Props {}

const StyledBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  color: #ffffff;
  cursor: default;
  user-select: none;
  div:nth-child(1) {
    opacity: 0.04;
  }
  div:nth-child(2) {
    opacity: 0.08;
  }
  div:nth-child(3) {
    opacity: 0.12;
  }
  div:nth-child(4) {
    opacity: 0.16;
  }
  div {
    text-align: justify;
    margin-bottom: -1.2em;
  }
  div::after {
    content: "_";
    display: inline-block;
    visibility: hidden;
    width: 100%;
  }
`;
const Background = (props: Props) => {
  return (
    <StyledBackground>
      <div>__ ___ _ _ __ ____ __ ___ _ ____ ___ _ ___</div>
      <div>_ __ _ _ __ __ _ _ _ _____ _ ___ ___ ____</div>
      <div>___ ____ _ __ _ ____ ____ _ _____ ___ _</div>
      <div>_ _ _ _ ____ ___ ____ _ __ __ ___ __ _ _</div>
    </StyledBackground>
  );
};

export default Background;
