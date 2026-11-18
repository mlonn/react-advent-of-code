import { goDirection, grid, printGrid } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  const g = grid(input);
  let gx, gy;
  for (let y = 0; y < g.length; y++) {
    for (let x = 0; x < g[y].length; x++) {
      if (g[y][x] === "^") {
        gx = x;
        gy = y;
        break;
      }
    }
  }
  if (gx === undefined || gy === undefined) {
    return "No guard found";
  }
  let dir = "U";

  const visited = new Set<string>();
  while (true) {
    visited.add(`${gx},${gy}`);
    const next: { v: string; x: number; y: number } | null = goDirection(gx, gy, dir, g);
    if (next === null) {
      break;
    }

    if (next.v === "#") {
      dir = nextDir(dir);
    } else {
      gx = next.x;
      gy = next.y;
    }
  }
  printGrid(g);
  return visited.size;
};

function checkLoops(g: string[][], gx: number, gy: number, dir: string) {
  const cp = copy(g);
  if (dir === "U") {
    cp[gy][gx - 1] = "O";
  }
  if (dir === "D") {
    cp[gy][gx + 1] = "O";
  }
  if (dir === "L") {
    cp[gy - 1][gx] = "O";
  }
  if (dir === "R") {
    cp[gy + 1][gx] = "O";
  }
  while (true) {
    const next: { v: string; x: number; y: number } | null = goDirection(gx, gy, dir, cp);
    if (next === null) {
      break;
    }
    if (next.v === "#") {
      const nDir = nextDir(dir);
      const n: { v: string; x: number; y: number } | null = goDirection(gx, gy, nDir, cp);
      if (n === null) {
        break;
      }
      if (cp[n.y][n.x] === "+") {
        console.log("Loop detected", dir);
        return 1;
      }
      if (nDir === "U" || nDir === "D") {
        if (cp[n.y][n.x] === "|") {
          console.log("Loop detected", dir);
          return 1;
        }
      }
      if (nDir === "L" || nDir === "R") {
        if (cp[n.y][n.x] === "-") {
          console.log("Loop detected", dir);
          return 1;
        }
      }
    }

    gx = next.x;
    gy = next.y;
  }
  return 0;
}

export const part2 = (input: string) => {
  const g = grid(input);
  let gx, gy;
  for (let y = 0; y < g.length; y++) {
    for (let x = 0; x < g[y].length; x++) {
      if (g[y][x] === "^") {
        gx = x;
        gy = y;
        break;
      }
    }
  }
  if (gx === undefined || gy === undefined) {
    return "No guard found";
  }
  let dir = "U";

  const visited = new Set<string>();

  let loops = 0;
  while (true) {
    visited.add(`${gx},${gy}`);
    const next: { v: string; x: number; y: number } | null = goDirection(gx, gy, dir, g);
    if (next === null) {
      break;
    }
    const nDir = nextDir(dir);
    let loop = checkLoops(g, next.x, next.y, nDir);
    if (next.v === "#") {
      dir = nDir;
      g[gy][gx] = "+";
    } else {
      const current = g[gy][gx];
      if (dir === "U" || dir === "D") {
        if (current === ".") {
          g[gy][gx] = "|";
        } else if (current === "-") {
          g[gy][gx] = "+";
        }
      }
      if (dir === "L" || dir === "R") {
        if (current === ".") {
          g[gy][gx] = "-";
        } else if (current === "|") {
          g[gy][gx] = "+";
        }
      }
      gx = next.x;
      gy = next.y;

      loops += loop;
    }
  }

  return loops;
};

const nextDir = (dir: string) => {
  if (dir === "U") {
    return "R";
  } else if (dir === "R") {
    return "D";
  } else if (dir === "D") {
    return "L";
  } else if (dir === "L") {
    return "U";
  }
  return dir;
};
const copy = <T>(g: T[][]): T[][] => {
  return g.map((r) => [...r]);
};
