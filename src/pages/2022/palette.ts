import type { Palette } from "../../components/ArtCalendar";

// Colours behind AoC 2022's `calendar-color-*` classes. The "f" keys are extrapolated guesses for parts of
// the map that weren't revealed yet; they only show once every day has both stars.
const base = {
  w: "#ffffff",
  c: "#eeeeee",
  a: "#aaaaaa",
  s: "#d0b376",
  u: "#5eabb4",
  g0: "#488813",
  g1: "#4d8b03",
  g2: "#7fbd39",
  g3: "#427322",
  g4: "#01461f",
};

const palette: Palette = {
  ...Object.fromEntries(Object.entries(base).map(([key, color]) => [key, { color }])),
  ...Object.fromEntries(Object.entries(base).map(([key, color]) => [`f${key}`, { color, final: true }])),
};

export default palette;
