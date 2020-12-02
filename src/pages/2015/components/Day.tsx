import React from "react";
import styled from "styled-components";

interface Props {
  complete?: boolean;
  children?: React.ReactNode;
}

const StyledDay = styled.a<{ complete?: boolean }>`
  :hover {
    background-color: #1e1e46;
    background-color: rgba(119, 119, 165, 0.2);
    color: ${({ complete }) => (complete ? "#009900" : "#666666")};
    cursor: pointer;
    cursor: pointer;
  }
  width: 100%;
  display: grid;
  justify-items: center;
  color: ${({ complete }) => (complete ? "#009900" : "#666666")};
`;

const Day = ({ children, complete }: Props) => {
  return (
    <StyledDay complete={complete}>
      <div>{children}</div>
    </StyledDay>
  );
};

export default Day;
