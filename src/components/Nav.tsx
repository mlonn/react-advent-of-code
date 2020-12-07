import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

interface Props {}

const StyledNav = styled.nav`
  display: inline-block;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inline-block;
  }
  ul li {
    display: inline-block;
    padding: 0 0.6em;
  }
  a {
    display: inline-block;
    text-decoration: none;
    outline: none;
  }
`;

const Year = styled.li<{ selected: boolean }>`
  ${({ selected }) =>
    selected &&
    css`
      color: #00cc00;
      font-weight: bold;
      font-size: 1.2em;
      text-shadow: 0 0 2px #00cc00, 0 0 5px #00cc00;
    `};
`;

const Nav = (props: Props) => {
  const years = ["2015"];
  const location = useLocation();
  return (
    <StyledNav>
      <ul>
        {years.map((year) => (
          <Year key={year} selected={location.pathname.includes(year)}>
            <Link to={`/${year}`}>[{year}]</Link>
          </Year>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
