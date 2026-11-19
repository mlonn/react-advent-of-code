import { Route, Routes } from "react-router";
import ArtCalendar from "../../components/ArtCalendar";
import Solution from "../../components/Solution";
import rows from "./calendarRows";
import palette from "./palette";
import status from "./status";

const AoC2019 = () => (
  <Routes>
    <Route index element={<ArtCalendar rows={rows} palette={palette} status={status} />} />
    <Route path="day/:day" element={<Solution />} />
  </Routes>
);

export default AoC2019;
