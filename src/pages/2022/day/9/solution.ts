import { lines, Point } from "../../../../utils/helpers";

type Direction = "U" | "R" | "D" | "L";
const Directions: { [key in Direction]: Point } = {
  U: { x: 0, y: -1 },
  R: { x: 1, y: 0 },
  D: { x: 0, y: 1 },
  L: { x: -1, y: 0 },
};

interface Rope {
  p: Point;
  tail?: Rope;
}
const moveHead = (h: Point, dir: Direction) => {
  h.x += Directions[dir].x;
  h.y += Directions[dir].y;
};
const moveTail = (h: Point, t: Point, dir: Direction) => {
  if (h.y === t.y && Math.abs(h.x - t.x) === 2) {
    t.x += h.x - t.x > 0 ? 1 : -1;
  }
  if (h.x === t.x && Math.abs(h.y - t.y) === 2) {
    t.y += h.y - t.y > 0 ? 1 : -1;
  }
  if (t.x === h.x) {
    return;
  }
  if (t.y === h.y) {
    return;
  }
  if (Math.abs(h.y - t.y) === 1 && Math.abs(h.x - t.x) === 1) {
    return;
  }
  t.x += h.x - t.x > 0 ? 1 : -1;
  t.y += h.y - t.y > 0 ? 1 : -1;
};

const moveRope = (rope: Rope, dir: Direction, visited: any) => {
  if (rope.tail) {
    moveTail(rope.p, rope.tail.p, dir);
    moveRope(rope.tail, dir, visited);
  } else {
    visited[rope.p.x + "," + rope.p.y] = true;
  }
};

export const part1 = (input: string) => {
  const h = { x: 0, y: 0 };
  const t = { x: 0, y: 0 };
  const visited: any = {};
  lines(input).forEach((line) => {
    const [dir, dist] = line.split(" ");
    for (let i = 0; i < parseInt(dist); i++) {
      moveHead(h, dir as Direction);
      moveTail(h, t, dir as Direction);
      visited[t.y + "," + t.x] = true;
    }
  });

  return Object.keys(visited).length;
};

const createRope = (length: number) => {
  const rope: Rope = { p: { x: 0, y: 0 } };
  let currentRope = rope;
  for (let i = 0; i < length; i++) {
    const newRope = { p: { x: 0, y: 0 } };
    currentRope.tail = newRope;
    currentRope = newRope;
  }
  return rope;
};

export const part2 = (input: string) => {
  const rope = createRope(9);
  const visited: any = {};
  lines(input).forEach((line) => {
    const [dir, dist] = line.split(" ");
    for (let i = 0; i < parseInt(dist); i++) {
      moveHead(rope.p, dir as Direction);
      moveRope(rope, dir as Direction, visited);
    }
  });

  return Object.keys(visited).length;
};
