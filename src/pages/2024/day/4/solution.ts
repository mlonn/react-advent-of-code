import { Direction, DirectionList, getDiagonal, goDirection, grid } from "../../../../utils/helpers";

const GOAL = "XMAS";
export const part1 = (input: string) => {
  const g = grid(input);
  let count = 0;
  for (let y = 0; y < g.length; y++) {
    for (let x = 0; x < g[y].length; x++) {
      const v = g[y][x];
      if (v !== "X") {
        continue;
      }
      for (const d of DirectionList) {
        if (step(v, x, y, d, g) === true) {
          count++;
        }
      }
    }
  }
  return count;
};
const step = (v: string, x: number, y: number, d: Direction, g: string[][]): boolean | null => {
  let w = v;

  let n = goDirection(x, y, d, g);
  if (n === null) {
    return null;
  }

  w += n.v;
  if (GOAL === w) {
    return true;
  }
  if (!GOAL.startsWith(w)) {
    return null;
  }
  console.log(n, w);
  return step(w, n.x, n.y, d, g);
};
export const part2 = (input: string) => {
  const g = grid(input);
  let count = 0;
  for (let y = 0; y < g.length; y++) {
    for (let x = 0; x < g[y].length; x++) {
      const v = g[y][x];
      if (v !== "A") {
        continue;
      }
      const d = getDiagonal(x, y, g);
      if (d === null) {
        continue;
      }
      const [a, b] = d;
      const aMas = a.join("");
      const bMas = b.join("");
      if ((aMas === "MAS" || aMas === "SAM") && (bMas === "MAS" || bMas === "SAM")) {
        count++;
      }
    }
  }
  return count;
};
