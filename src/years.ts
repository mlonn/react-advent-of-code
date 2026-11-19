// Event metadata only. Page components are wired up in App.tsx so that this module (imported by Solution, Nav
// and Home) doesn't import the year pages and create an import cycle.
import status2015 from "./pages/2015/status";
import status2016 from "./pages/2016/status";
import status2017 from "./pages/2017/status";
import status2018 from "./pages/2018/status";
import status2019 from "./pages/2019/status";
import status2020 from "./pages/2020/status";
import status2021 from "./pages/2021/status";
import status2022 from "./pages/2022/status";
import status2023 from "./pages/2023/status";
import status2024 from "./pages/2024/status";
import status2025 from "./pages/2025/status";
import { Status } from "./types";

export interface Event {
  year: string;
  status: Status;
  /** Number of puzzles that year (25 until 2024, 12 from 2025). */
  days: number;
}

/** Every event, newest first. */
export const events: Event[] = [
  { year: "2025", status: status2025, days: 12 },
  { year: "2024", status: status2024, days: 25 },
  { year: "2023", status: status2023, days: 25 },
  { year: "2022", status: status2022, days: 25 },
  { year: "2021", status: status2021, days: 25 },
  { year: "2020", status: status2020, days: 25 },
  { year: "2019", status: status2019, days: 25 },
  { year: "2018", status: status2018, days: 25 },
  { year: "2017", status: status2017, days: 25 },
  { year: "2016", status: status2016, days: 25 },
  { year: "2015", status: status2015, days: 25 },
];

export const eventByYear = (year: string | undefined) => events.find((e) => e.year === year);

export const starCount = (status: Status) => Object.values(status).reduce((n, s) => n + (s.complete ? 1 : 0) + (s.veryComplete ? 1 : 0), 0);
