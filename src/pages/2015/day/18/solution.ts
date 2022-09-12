import { getNeighbours, grid } from "../../../../utils/helpers";

const copy = <T>(g: T[][]): T[][] => {
  return g.map((r) => [...r]);
};
const isCorner = <T>(x: number, y: number, grid: T[][]) => {
  if (y === 0 || y === grid.length - 1) {
    return x === 0 || x === grid[0].length - 1;
  }
  return false;
};
export const part1 = (input: string): number => {
  let g = grid(input).map((r) => r.map((v) => v === "#"));
  for (let i = 0; i < 100; i++) {
    const c = copy(g);
    for (const y in g) {
      for (const x in g[y]) {
        const n = getNeighbours(+x, +y, g).filter((n) => n).length;
        const current = g[y][x];
        if (current) {
          c[y][x] = n === 3 || n === 2;
        } else {
          c[y][x] = n === 3;
        }
      }
    }
    g = c;
  }
  let sum = 0;
  for (const y in g) {
    for (const x in g[y]) {
      if (g[y][x]) {
        sum++;
      }
    }
  }
  return sum;
};
export const part2 = (input: string): number => {
  let g = grid(input).map((r) => r.map((v) => v === "#"));
  let y = g.length - 1;
  let x = g[0].length - 1;
  g[0][0] = true;
  g[y][0] = true;
  g[y][x] = true;
  g[0][x] = true;
  for (let i = 0; i < 100; i++) {
    const c = copy(g);
    for (const y in g) {
      for (const x in g[y]) {
        const n = getNeighbours(+x, +y, g).filter((n) => n).length;
        const current = g[y][x];
        if (isCorner(+x, +y, g)) {
          c[y][x] = true;
        } else if (current) {
          c[y][x] = n === 3 || n === 2;
        } else {
          c[y][x] = n === 3;
        }
      }
    }
    g = c;
  }
  let sum = 0;
  for (const y in g) {
    for (const x in g[y]) {
      if (g[y][x]) {
        sum++;
      }
    }
  }
  return sum;
};
