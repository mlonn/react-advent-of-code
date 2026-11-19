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
    color: ${({ $complete }) => ($complete ? "#009900" : "#666666")};
    cursor: pointer;
    cursor: pointer;
  }
  width: 100%;
  display: grid;
  justify-items: center;
  color: ${({ $complete }) => ($complete ? "#009900" : "#666666")};
`;

const Day = ({ children, complete, veryComplete, day }: Props) => {
  const { year } = useParams();

  return (
    <StyledDay $complete={complete} to={`/${year}/day/${day}`}>
      <div>{children}</div>
    </StyledDay>
  );
};

export default Day;
