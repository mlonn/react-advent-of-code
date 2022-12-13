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
        color: #666666;
        .calendar-color-g0 {
          color: #427322;
        }
        .calendar-color-g1 {
          color: #4d8b03;
        }
        .calendar-color-g2 {
          color: #7fbd39;
        }
        .calendar-color-g3 {
          color: #427322;
        }
        .calendar-color-g4 {
          color: #01461f;
        }
        .calendar-color-a {
          color: #aaaaaa;
        }
        .calendar-color-c {
          color: #eeeeee;
        }
        .calendar-color-s {
          color: #d0b376;
        }
        .calendar-color-u {
          color: #5eabb4;
        }
        .calendar-color-w {
          color: #ffffff;
        }
        :hover {
          color: #666666;
          background-color: #1e1e46;
          background-color: rgba(119, 119, 165, 0.2);
          cursor: pointer;
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
