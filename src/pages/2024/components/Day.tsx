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
    if (disabled) {
      return css`
        color: #333;
        pointer-events: none;
      `;
    }
    return css`
      &:hover {
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

const Day = ({ children, day, disabled }: Props) => {
  const { year } = useParams();

  return (
    <StyledDay $disabled={disabled} to={`/${year}/day/${day}`}>
      {children}
    </StyledDay>
  );
};

export default Day;
