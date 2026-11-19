import type { Palette } from "../../components/ArtCalendar";

// Colours behind AoC 2023's `calendar-color-*` classes. AoC reveals them by region, not row, so the imported
// ones always show. "ys" is each day's star (lit when that day is solved); "f" keys are extrapolated guesses
// for unrevealed parts and only show once every day has both stars.
const yellow = { color: "#ffff66", glow: "0 0 5px #ffff66, 0 0 10px #ffff66" };
const base = {
  b: "#5555bb",
  g: "#00cc00",
  l: "#ccccff",
  m: "#d4dde4",
  n: "#9b715b",
  w: "#ffffff",
};

const palette: Palette = {
  ...Object.fromEntries(Object.entries(base).map(([key, color]) => [key, { color, always: true }])),
  ...Object.fromEntries(Object.entries(base).map(([key, color]) => [`f${key}`, { color, final: true }])),
  y: { ...yellow, always: true },
  ys: yellow,
};

export default palette;
