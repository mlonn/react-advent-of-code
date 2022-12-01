import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled, { css } from "styled-components";

interface Props {
  day: number;
  complete?: boolean;
  veryComplete?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const StyledDay = styled(Link)<{ complete?: boolean; disabled?: boolean }>`
  ${({ disabled, complete }) => {
    if (complete) {
      return css`
        color: #5eabb4;
        :hover {
          background-color: #1e1e46;
          background-color: rgba(119, 119, 165, 0.2);
          cursor: pointer;
          color: #5eabb4;
        }
      `;
    }
    if (disabled) {
      return css`
        color: #333;
        pointer-events: none;
      `;
    }
    return css`
      :hover {
        background-color: #1e1e46;
        background-color: rgba(119, 119, 165, 0.2);
        cursor: pointer;
        color: #666;
      }
      color: #666;
      width: 100%;
    `;
  }};
`;

const Day = ({ children, day, disabled, complete }: Props) => {
  let { url } = useRouteMatch();

  return (
    <StyledDay complete={complete} disabled={disabled} to={`${url}/day/${day}`}>
      {children}
    </StyledDay>
  );
};

export default Day;
