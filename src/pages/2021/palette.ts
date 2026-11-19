import type { Palette } from "../../components/ArtCalendar";

// Colours behind AoC 2021's `calendar-color-*` classes: water darkens with depth, one shade per row.
// w18-w25 weren't on the page yet, so they continue the gradient.
const palette: Palette = {
  g: { color: "#a47a4d" },
  o: { color: "#c74c30" },
  r: { color: "#ff0000" },
  s: { color: "#ffffff" },
  w1: { color: "#00c8ff" },
  w2: { color: "#00b5ed" },
  w3: { color: "#00a2db" },
  w4: { color: "#0091cc" },
  w5: { color: "#0085c0" },
  w6: { color: "#0079b5" },
  w7: { color: "#006daa" },
  w8: { color: "#00619f" },
  w9: { color: "#005a98" },
  w10: { color: "#005291" },
  w11: { color: "#004a8a" },
  w12: { color: "#004282" },
  w13: { color: "#003b7b" },
  w14: { color: "#003374" },
  w15: { color: "#002e6f" },
  w16: { color: "#00296b" },
  w17: { color: "#002566" },
  w18: { color: "#002162" },
  w19: { color: "#001e5e" },
  w20: { color: "#001b5a" },
  w21: { color: "#001857" },
  w22: { color: "#001654" },
  w23: { color: "#001451" },
  w24: { color: "#00124e" },
  w25: { color: "#00104b" },
};

export default palette;
