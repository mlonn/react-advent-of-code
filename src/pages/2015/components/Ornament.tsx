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
          ${
            veryComplete || complete
              ? css`
                  text-shadow: 0 0 5px
                    ${veryComplete ? "#ff0000" : complete ? "#009900" : ""};
                `
              : ""
          };
        `;
      case "O":
        return css`
          color: ${veryComplete ? "#0066ff" : complete ? "#009900" : "#666"};
          ${veryComplete || complete
            ? css`
                text-shadow: 0 0 5px
                  ${veryComplete ? "#0066ff" : complete ? "#009900" : ""};
              `
            : ""};
        `;
      case "o":
        return css`
          color: ${veryComplete ? "#ff9900" : complete ? "#009900" : "#666"};
          ${veryComplete || complete
            ? css`
                text-shadow: 0 0 5px
                  ${veryComplete ? "#ff9900" : complete ? "#009900" : ""};
              `
            : ""};
        `;
      case "*":
        return css`
          color: ${veryComplete ? "#ffff66" : complete ? "#009900" : "#666"};
          ${veryComplete || complete
            ? css`
                text-shadow: 0 0 5px
                  ${veryComplete ? "#ffff66" : complete ? "#009900" : ""};
              `
            : ""};
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
