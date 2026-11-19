import { Route, Routes } from "react-router";
import Solution from "../../components/Solution";
import CircuitCalendar from "./components/CircuitCalendar";
import status from "./status";

const AoC2017 = () => (
  <Routes>
    <Route index element={<CircuitCalendar status={status} />} />
    <Route path="day/:day" element={<Solution />} />
  </Routes>
);

export default AoC2017;
