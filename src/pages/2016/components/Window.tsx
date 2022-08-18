import React from "react";
import styled, { css } from "styled-components";

interface Props {
  color: "green" | "red";
  children?: React.ReactNode;
}

const StyledWindow = styled.span<{ color: "green" | "red" }>`
  ${({ color }) => {
    switch (color) {
      case "green":
        return css`
          color: #009900;
          text-shadow: 0 0 5px #009900;
        `;
      case "red":
        return css`
          color: #ff0000;
          text-shadow: 0 0 5px #ff0000;
        `;
    }
  }}
  width: 100%;
`;

const Window = ({ children, color }: Props) => {
  return <StyledWindow color={color}>{children}</StyledWindow>;
};

export default Window;
