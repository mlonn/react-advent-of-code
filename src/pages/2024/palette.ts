import type { Palette } from "../../components/ArtCalendar";

// Colours behind AoC 2024's `calendar-color-*` classes. 2g1 and 2g4 weren't on the live page yet,
// so they reuse the matching greens from the 2022 calendar.
const palette: Palette = {
  w: { color: "#cccccc" },
  "2g0": { color: "#488813" },
  "2g1": { color: "#4d8b03" },
  "2g2": { color: "#7fbd39" },
  "2g3": { color: "#427322" },
  "2g4": { color: "#01461f" },
  "2u": { color: "#5eabb4" },
  "3b": { color: "#5555bb" },
  "3g": { color: "#00cc00" },
  "3s": { color: "#e3b585" },
  "3y": { color: "#ffff66", glow: "0 0 5px #ffff66, 0 0 10px #ffff66" },
  "6b": { color: "#009900" },
  "6o": { color: "#ff9900", glow: "0 0 5px #ff9900" },
  "6r": { color: "#ff0000", glow: "0 0 5px #ff0000" },
  "6t": { color: "#aaaaaa" },
  "6u": { color: "#0066ff", glow: "0 0 5px #0066ff" },
  "6y": { color: "#ffff66", glow: "0 0 5px #ffff66" },
  "8e": { color: "#cccccc" },
  "8i": { color: "#ff0000", glow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000" },
  "8n": { color: "#886655" },
  "8w": { color: "#cccccc" },
};

export default palette;
