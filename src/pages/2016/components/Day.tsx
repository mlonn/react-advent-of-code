import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

interface Props {
  day: number;
  complete?: boolean;
  veryComplete?: boolean;
  children?: React.ReactNode;
}

const StyledDay = styled(Link)<{ complete?: boolean }>`
  :hover {
    background-color: #1e1e46;
    background-color: rgba(119, 119, 165, 0.2);
    cursor: pointer;
    color: #666;
  }
  color: #666;
  width: 100%;
`;

const Day = ({ children, complete, veryComplete, day }: Props) => {
  let { url } = useRouteMatch();

  return (
    <StyledDay complete={complete} to={`${url}/day/${day}`}>
      <div>{children}</div>
    </StyledDay>
  );
};

export default Day;
