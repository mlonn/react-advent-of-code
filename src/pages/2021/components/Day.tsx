import React from "react";
import { Link, useParams } from "react-router";
import styled from "styled-components";

interface Props {
  day: number;
  complete?: boolean;
  veryComplete?: boolean;
  children?: React.ReactNode;
}

const StyledDay = styled(Link)<{ $complete?: boolean }>`
  &:hover {
    background-color: #1e1e46;
    background-color: rgba(119, 119, 165, 0.2);
    cursor: pointer;
    color: #666;
  }
  color: #666;
  width: 100%;
`;

const Day = ({ children, day }: Props) => {
  const { year } = useParams();

  return <StyledDay to={`/${year}/day/${day}`}>{children}</StyledDay>;
};

export default Day;
