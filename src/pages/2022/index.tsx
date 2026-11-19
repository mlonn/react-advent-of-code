import { Route, Routes } from "react-router";
import ArtCalendar from "../../components/ArtCalendar";
import Solution from "../../components/Solution";
import rows from "./calendarRows";
import palette from "./palette";
import status from "./status";

// Like 2020, AoC 2022 reveals colour by map region rather than by row, so the imported colours always show.
const AoC2022 = () => (
  <Routes>
    <Route index element={<ArtCalendar rows={rows} palette={palette} status={status} colorOn="always" />} />
    <Route path="day/:day" element={<Solution />} />
  </Routes>
);

export default AoC2022;
