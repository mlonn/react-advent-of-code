import { Route, Routes } from "react-router";
import ArtCalendar from "../../components/ArtCalendar";
import Solution from "../../components/Solution";
import rows from "./calendarRows";
import palette from "./palette";
import status from "./status";

// AoC 2018 draws nothing for a day until it has a star.
const AoC2018 = () => (
  <Routes>
    <Route index element={<ArtCalendar rows={rows} palette={palette} status={status} colorOn="complete" hideUnrevealed />} />
    <Route path="day/:day" element={<Solution />} />
  </Routes>
);

export default AoC2018;
