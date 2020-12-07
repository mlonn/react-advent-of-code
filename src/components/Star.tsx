import React from "react";
import styled from "styled-components";

const StyledStar = styled.span<Props>`
  color: #ffff66;
  visibility: ${({ complete }) => (complete ? "visible" : "hidden")};
`;
interface Props {
  complete: boolean;
}
const Star = ({ complete }: Props) => {
  return <StyledStar complete={complete}>*</StyledStar>;
};

export default Star;
