import type { Palette } from "../../components/ArtCalendar";

// Colours sampled from a screenshot of the completed 2019 calendar. Orbits are plain grey; the faint
// background dots always show; planets, the sun, the comet and asteroids appear when their day is solved.
const glow = (color: string, size = 5) => `0 0 ${size}px ${color}`;
const body = (color: string, size = 5) => ({ color, glow: glow(color, size), hidden: true });

const palette: Palette = {
  d: { color: "#333333", always: true },
  W: body("#cccccc"),
  E: body("#e3e2e0"),
  L: body("#92a6bc"),
  P: body("#cdc1b3"),
  R: body("#f5a860"),
  M: body("#ffffff"),
  S: body("#d3c0ae", 8),
  J: body("#eac887", 8),
  c: body("#bfe4e7", 8),
  B: body("#4873fa", 8),
  Y: { color: "#ffff66", glow: "0 0 5px #ffff66, 0 0 10px #ffff66, 0 0 20px #ffff66", hidden: true },
  // The comet's tail trails up and to the right.
  C: { color: "#cde0f7", glow: "0 0 4px #cde0f7, 4px -4px 3px #4466cc, 8px -8px 4px #334488", hidden: true },
  A: { color: "#777744", hidden: true },
  a: { color: "#555538", hidden: true },
  aa: { color: "#3a3a2c", hidden: true },
};

export default palette;
