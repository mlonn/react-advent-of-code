import { getNeighboursWithCoordinates, grid } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  const g = grid(input);
  let sum = 0;
  for (let y = 0; y < g.length; y++) {
    let n = "";
    let neighbours: { x: number; y: number; v: string }[] = [];
    for (let x = 0; x < g[y].length; x++) {
      const v = g[y][x];
      if (!isNaN(+v)) {
        n += v;
        const newNeighbours = getNeighboursWithCoordinates(+x, +y, g);
        neighbours = neighbours.concat(newNeighbours.filter(({ v }) => v !== "." && isNaN(+v)));
        const nextV = g[y][x + 1];
        if (isNaN(+nextV)) {
          if (neighbours.length > 0) {
            sum += +n;
          }
          neighbours = [];
          n = "";
        }
      }
    }
  }
  return sum;
};
export const part2 = (input: string) => {
  const g = grid(input);

  const gears: { [key: string]: Set<number> } = {};
  for (let y = 0; y < g.length; y++) {
    let n = "";
    let neighbours: { x: number; y: number; v: string }[] = [];
    for (let x = 0; x < g[y].length; x++) {
      const v = g[y][x];
      if (!isNaN(+v)) {
        n += v;
        const newNeighbours = getNeighboursWithCoordinates(+x, +y, g);
        neighbours = neighbours.concat(newNeighbours.filter(({ v }) => v !== "." && isNaN(+v)));

        const nextV = g[y][x + 1];
        if (isNaN(+nextV)) {
          for (const { x, y, v } of neighbours) {
            if (v === "*") {
              if (!gears[`${x},${y}`]) {
                gears[`${x},${y}`] = new Set();
              }
              gears[`${x},${y}`].add(+n);
            }
          }
          neighbours = [];
          n = "";
        }
      }
    }
  }

  let p2 = 0;
  Object.values(gears).forEach((v) => {
    const vv = Array.from(v);
    if (vv.length === 2) {
      p2 += vv.reduce((acc, v) => acc * v, 1);
    }
  });
  return p2;
};
