import { lines, manhattan, Point } from "../../../../utils/helpers";

interface Rule {
  s: { x: number; y: number };
  b: { x: number; y: number };
  dist: number;
}
function parse(input: string) {
  let minX = Infinity;
  let maxX = 0;

  const rules = lines(input).map((line) => {
    const match = line.match(/Sensor at x=(-?\d*), y=(-?\d*): closest beacon is at x=(-?\d*), y=(-?\d*)/);
    if (match) {
      const [, sx, sy, bx, by] = match;
      const dist = manhattan({ x: +sx, y: +sy }, { x: +bx, y: +by });
      if (+sx - dist < minX) {
        minX = +sx - dist;
      }
      if (+sx + dist > maxX) {
        maxX = +sx + dist;
      }
      return {
        s: { x: +sx, y: +sy },
        b: { x: +bx, y: +by },
        dist,
      };
    }
    throw new Error("invalid rule");
  });
  return { minX, maxX, rules };
}

export const part1 = (input: string) => {
  let { minX, maxX, rules } = parse(input);

  const y = 2000000;

  let c = new Set();
  for (let x = minX; x < maxX; x++) {
    for (const { s, b, dist } of rules) {
      const p = { x: x, y };
      const n = manhattan(s, p);
      if (n <= dist && !(p.x === b.x && b.y === p.y)) {
        c.add(x);
      }
    }
  }
  return c.size;
};

const possible = (p: Point, rules: Rule[], max: number) => {
  const { x, y } = p;
  if (!(0 <= x && x <= max && 0 <= y && y <= max)) {
    return false;
  }
  for (const { s, dist } of rules) {
    const n = manhattan(s, p);
    if (n <= dist) {
      return false;
    }
  }
  return true;
};

export const part2 = (input: string) => {
  let { rules } = parse(input);
  const max = 4000000;
  for (const { dist, s } of rules) {
    const perimeter = dist + 1;
    for (let dx = 0; dx <= perimeter; dx++) {
      //go up and down in x
      for (const xDir of [1, -1]) {
        // go up and down in y
        for (const yDir of [1, -1]) {
          const dy = perimeter - dx;
          const x = s.x + dx * xDir;
          const y = s.y + dy * yDir;
          if (possible({ x, y: y }, rules, max)) {
            return x * max + y;
          }
        }
      }
    }
  }
};
