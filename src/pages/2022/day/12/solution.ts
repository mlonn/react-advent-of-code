import { grid } from "../../../../utils/helpers";

interface Node {
  value: string;
  elevation: number;
  parent?: Node;
  row: number;
  col: number;
  dist: number;
}
function bfs(g: Node[][], q: Node[]) {
  const R = g.length;
  const C = g[0].length;
  const visited: { [key: string]: boolean } = {};
  while (q.length > 0) {
    const current = q.shift();
    if (current === undefined) {
      throw new Error("bad");
    }
    const { row, col, value, dist } = current;

    if (visited[row + "," + col]) {
      continue;
    }
    visited[row + "," + col] = true;
    if (value === "E") {
      return dist;
    }
    for (const [dr, dc] of [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]) {
      const rr = row + dr;
      const cc = col + dc;
      if (0 <= rr && rr < R && 0 <= cc && cc < C && g[rr][cc].elevation <= 1 + g[row][col].elevation) {
        g[rr][cc].dist = dist + 1;
        q.push(g[rr][cc]);
      }
    }
  }
}

function parseGrid(input: string) {
  const g = grid(input).map((row, ri) =>
    row.map((value, ci) => {
      let n = value.charCodeAt(0) - "a".charCodeAt(0) + 1;
      if (value === "S") {
        n = 1;
      }
      if (value === "E") {
        n = 26;
      }
      const cell: Node = { value: value, row: ri, col: ci, elevation: n, dist: 0 };
      return cell;
    })
  );
  return g;
}

export const part1 = (input: string) => {
  const g = parseGrid(input);
  const q: Node[] = [];
  const R = g.length;
  const C = g[0].length;
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (g[row][col].value === "S") {
        q.push(g[row][col]);
      }
    }
  }

  return bfs(g, q);
};
export const part2 = (input: string) => {
  const gr = parseGrid(input);

  const R = gr.length;
  const C = gr[0].length;
  let min = Infinity;
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (gr[row][col].elevation === 1) {
        const g = parseGrid(input);
        const q: Node[] = [];
        q.push(g[row][col]);
        const path = bfs(g, q);
        if (path && path < min) {
          min = path;
          console.log(min, q);
        }
      }
    }
  }
  return min;
};
