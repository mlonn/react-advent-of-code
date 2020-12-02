import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

interface Props {}

const StyledHeader = styled.header`
  cursor: default;
  margin-bottom: 2em;

  h1 {
    margin: 0;
    padding-right: 1em;
  }
  h1,
  h1 a,
  h1 span {
    text-decoration: none;
    color: #00cc00;
    text-shadow: 0 0 2px #00cc00, 0 0 5px #00cc00;
  }
  h1 a:hover,
  h1 a:focus {
    color: #99ff99;
    text-shadow: 0 0 2px #99ff99, 0 0 5px #99ff99;
  }
`;

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <div>
        <h1>
          <Link to="/">Advent of Code</Link>
        </h1>
        <Nav />
      </div>
    </StyledHeader>
  );
};

export default Header;
