import styled from "styled-components";
import React from "react";
const StyledCalendar = styled.pre`
  cursor: default;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

interface Props {
  year: number;
  children: React.ReactNode;
}

const Calendar = ({ year, children }: Props) => {
  return <StyledCalendar>{children}</StyledCalendar>;
};

export default Calendar;
