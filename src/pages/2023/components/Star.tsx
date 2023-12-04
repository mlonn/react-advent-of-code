import styled from "styled-components";
import React from "react";

const StyledOrnament = styled.span`
  color: #333;
`;
interface Props {
  children: React.ReactNode;
}
const Star = ({ children }: Props) => {
  return <StyledOrnament>{children}</StyledOrnament>;
};

export default Star;
