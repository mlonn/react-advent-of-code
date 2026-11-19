// Imported from the AoC 2023 calendar HTML with scripts/import-calendar.mjs (rows in AoC's order). "ys" is a
// day's own star, lit when that day is solved; keys starting with "f" are extrapolated colours for characters
// that weren't revealed yet and only show once every day is solved.
import type { CalendarRow } from "../../components/ArtCalendar";

const rows: CalendarRow[] = [
  { day: 14, segments: ["                         ", ["*", "ys"]] },
  { day: 15, segments: ["                                 ", ["*", "ys"]] },
  { day: 16, segments: ["                                    ", ["*", "ys"]] },
  { day: 13, segments: ["                        ", ["*", "ys"]] },
  { day: 17, segments: ["              ", ["*", "ys"]] },
  { day: 12, segments: ["        ", ["*", "ys"]] },
  { day: 18, segments: ["                 ", ["*", "ys"]] },
  { day: 11, segments: ["      ", ["*", "ys"]] },
  { day: 10, segments: ["            ", ["*", "ys"]] },
  { day: 19, segments: ["                      ", ["*", "ys"]] },
  { day: 9, segments: ["               ", ["*", "ys"]] },
  { day: 8, segments: ["                    ", ["*", "ys"]] },
  { day: 20, segments: ["                       ", ["*", "ys"]] },
  { day: 7, segments: ["                  ", ["*", "ys"], "            ", [".", "g"], " ", ["'", "fg"], " ", ["'", "g"], ["'", "fg"], " ", ["''", "fg"], ["'", "g"], ["..", "fg"], [".", "g"]] },
  { day: 6, segments: ["                            ", ["'", "fg"], "     ", ["*", "ys"], "     ", ["..", "fg"], "  ", ["''.", "fg"]] },
  { day: 21, segments: ["                         ", ["'", "g"], "            ", ["~", "fb"], ["'", "fg"], ["*", "ys"], " ", ["'.", "fg"], ["~", "fb"], "  ", ["'", "g"], [".", "fg"]] },
  { day: 5, segments: ["                                  ", ["~", "b"], "     ", ["'.", "fg"], " ", ["*", "ys"], ["'.", "fg"], ["~", "fb"], " ", [":", "fg"]] },
  { day: 22, segments: ["                 ", ["...''''", "w"], ["'", "g"], "   ", ["*", "ys"], "      ", [".''.", "g"], ["~", "b"], "  ", ["'..'", "fg"], " ", [".", "fg"], ["'", "g"]] },
  { day: 4, segments: ["              ", [".''", "w"], "          ", [".", "g"], "   ", ["~", "b"], ["..'", "g"], ["*", "y"], "   ", ["'.", "g"], " ", ["~", "b"], " ", [".", "fg"], [".", "g"], ["'", "fg"]] },
  { day: 23, segments: ["            ", [".'", "w"], " ", ["*", "ys"], "             ", ["'''..", "g"], ["/", "m"], ["......'''", "g"]] },
  { day: 25, segments: ["            ", [":", "w"], "           ", ["*", "ys"], " ", ["/\\", "w"], "    ", ["-", "l"], ["/", "m"], "  ", [":", "w"]] },
  { day: 24, segments: ["            ", ["'.", "w"], "      ", ["*", "ys"], "     ", ["-", "l"], "   ", ["-", "l"], " ", ["/", "m"], "  ", [".'", "w"]] },
  { day: 3, segments: ["              ", ["'..", "w"], "    ", ["-", "l"], "     ", ["-", "l"], "   ", ["*", "y"], ["..'", "w"]] },
  { day: 2, segments: ["    ", ["----@", "n"], "        ", ["'''..", "w"], ["*", "y"], ["......'''", "w"]] },
  { day: 1, segments: ["  ", ["*", "y"], " ", ["!", "n"], " ", ["/^\\", "n"]] },
];

export default rows;
