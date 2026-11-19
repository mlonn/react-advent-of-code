import React from "react";
import { Link, useParams } from "react-router";
import styled, { css } from "styled-components";

interface Props {
  day: number;
  complete?: boolean;
  veryComplete?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const StyledDay = styled(Link)<{ $complete?: boolean; $disabled?: boolean }>`
  ${({ $disabled: disabled, $complete: complete }) => {
    let d;
    if (disabled) {
      d = css`
        pointer-events: none;
      `;
    }

    return css`
      ${d};
      color: #666;
      &:hover {
        background-color: #1e1e46;
        background-color: rgba(119, 119, 165, 0.2);
        cursor: pointer;
        color: #666;
      }
      .calendar-color-l {
        color: #ccccff;
      }

      .calendar-color-y {
        color: #ffff66;
        text-shadow:
          0 0 5px #ffff66,
          0 0 10px #ffff66;
      }

      .calendar-color-g {
        color: #00cc00;
      }

      .calendar-color-n {
        color: #9b715b;
      }

      .calendar-color-w {
        color: #ffffff;
      }

      .calendar-color-m {
        color: #d4dde4;
      }

      .calendar-color-b {
        color: #5555bb;
      }
      width: 100%;
    `;
  }};
`;

const Day = ({ children, day, disabled }: Props) => {
  const { year } = useParams();

  return (
    <StyledDay $disabled={disabled} to={`/${year}/day/${day}`}>
      {children}
    </StyledDay>
  );
};

export default Day;
