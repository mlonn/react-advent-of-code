import type { Palette } from "../../components/ArtCalendar";

// Colours behind AoC 2020's `calendar-color-*` classes. The "f" keys are extrapolated guesses for parts of
// the map that weren't revealed yet; they only show once every day has both stars.
const palette: Palette = {
  l: { color: "#ccccff" },
  r: { color: "#ff0000" },
  w: { color: "#ffffff" },
  a: { color: "#cccccc" },
  b: { color: "#333399" },
  g: { color: "#00cc00" },
  fb: { color: "#333399", final: true },
  fg: { color: "#00cc00", final: true },
  fa: { color: "#cccccc", final: true },
  fw: { color: "#ffffff", final: true },
};

export default palette;
