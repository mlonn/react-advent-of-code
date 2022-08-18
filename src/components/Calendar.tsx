import React from "react";
import styled from "styled-components";
const StyledCalendar = styled.pre`
  cursor: default;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
  display: grid;
  grid-template-columns: min-content min-content min-content;
  align-items: end;
  grid-column-gap: 10px;
`;

interface Props {
  children: React.ReactNode;
}

const Calendar = ({ children }: Props) => {
  return <StyledCalendar>{children}</StyledCalendar>;
};

export default Calendar;
