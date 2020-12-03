import React from "react";
import styled, { css } from "styled-components";

type OrnamentType = "@" | "O" | "o" | "*";

interface Props {
  type: OrnamentType;
  complete?: boolean;
  veryComplete?: boolean;
}

const StyledOrnament = styled.span<Props>`
  ${({ type, complete, veryComplete }) => {
    switch (type) {
      case "@":
        return css`
          color: ${veryComplete ? "#ff0000" : complete ? "#009900" : "#666"}};
          text-shadow: 0 0 5px ${
            veryComplete ? "#ff0000" : complete ? "#009900" : "#666"
          };
        `;
      case "O":
        return css`
          color: ${veryComplete ? "#0066ff" : complete ? "#009900" : "#666"};
          text-shadow: 0 0 5px
            ${veryComplete ? "#ff0000" : complete ? "#009900" : "#666"};
        `;
      case "o":
        return css`
          color: ${veryComplete ? "#ff9900" : complete ? "#009900" : "#666"};
          text-shadow: 0 0 5px
            ${veryComplete ? "#ff0000" : complete ? "#009900" : "#666"};
        `;
      case "*":
        return css`
          color: ${veryComplete ? "#ffff66" : complete ? "#009900" : "#666"};
          text-shadow: 0 0 5px
            ${veryComplete ? "#ff0000" : complete ? "#009900" : "#666"};
        `;
    }
  }};
`;

const Ornament = ({ type, complete, veryComplete }: Props) => {
  return (
    <StyledOrnament complete={complete} veryComplete={veryComplete} type={type}>
      {type}
    </StyledOrnament>
  );
};

export default Ornament;
