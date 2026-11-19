import type { Palette } from "../../components/ArtCalendar";

// Extrapolated solved-state colours for 2025 (see calendarRows.ts).
const palette: Palette = {
  w: { color: "#cccccc" },
  g: { color: "#999999" },
  y: { color: "#ffff66", glow: "0 0 5px #ffff66, 0 0 10px #ffff66" },
  Y: { color: "#ffff66" },
  r: { color: "#ff0000", glow: "0 0 5px #ff0000" },
  b: { color: "#0066ff", glow: "0 0 5px #0066ff" },
  a: { color: "#ff9900" },
  G: { color: "#00cc00" },
  u: { color: "#5eabb4" },
};

export default palette;
