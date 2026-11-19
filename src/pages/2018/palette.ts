import type { Palette } from "../../components/ArtCalendar";

// Colours sampled from a screenshot of the completed 2018 calendar.
const palette: Palette = {
  w: { color: "#cccccc" },
  g: { color: "#999999" },
  h: { color: "#777777" },
  s: { color: "#555555" },
  t: { color: "#444444" },
  d: { color: "#666666" },
  r: { color: "#ff0000" },
  R: { color: "#880000" },
  G: { color: "#009900" },
  b: { color: "#0066ff" },
  n: { color: "#886655" },
  y: { color: "#ffff66", glow: "0 0 5px #ffff66, 0 0 10px #ffff66" },
  o: { color: "#ff0000", glow: "0 0 5px #ff0000, 0 0 10px #ff0000" },
  x: { color: "#0066ff", transform: "translateY(-45%) rotate(-50deg) scale(2)" },
};

export default palette;
