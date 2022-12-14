import { lines } from "../../../../utils/helpers";

let maxCol = 0;
let maxRow = 0;

function parseCave(input: string) {
  const walls: number[][][] = [];
  lines(input).forEach((line) => {
    const directions = line.split(" -> ").map((dir) => dir.split(",").map((cord) => parseInt(cord)));
    directions.forEach(([col, row]) => {
      if (col > maxCol) {
        maxCol = col;
      }
      if (row > maxRow) {
        maxRow = row;
      }
    });
    walls.push(directions);
  });
  const cave = Array.from(Array(maxRow + 2)).map(() => Array.from(Array(1000)).map(() => "."));

  walls.forEach((wall) => {
    for (let i = 0; i < wall.length - 1; i++) {
      const [tsc, tsr] = wall[i];
      const [tec, ter] = wall[i + 1];
      const sc = Math.min(tsc, tec);
      const ec = Math.max(tsc, tec);
      const sr = Math.min(tsr, ter);
      const er = Math.max(tsr, ter);
      for (let row = sr; row <= er; row++) {
        for (let col = sc; col <= ec; col++) {
          cave[row][col] = "#";
        }
      }
    }
  });
  return cave;
}

function placeSand(cave: string[][]) {
  let col = 500;
  let row = 0;
  while (row < cave.length && col < cave[0].length - 1) {
    if (cave[row][col] === ".") {
      row++;
      continue;
    }
    if (cave[row][col] === "#") {
      if (cave[row][col - 1] === ".") {
        col--;
      } else if (cave[row][col + 1] === ".") {
        col++;
      } else {
        break;
      }
    }
    if (cave[row][col] === "o") {
      if (cave[row][col - 1] === ".") {
        col--;
      } else if (cave[row][col + 1] === ".") {
        col++;
      } else {
        break;
      }
    }
  }
  cave[row - 1][col] = "o";
  return row - 1;
}

export const part1 = (input: string) => {
  const cave = parseCave(input);
  let i = 0;
  while (true) {
    const placedRow = placeSand(cave);
    if (placedRow > maxRow) {
      return i;
    }
    i++;
  }
};

export const part2 = (input: string) => {
  const cave = parseCave(input);
  let i = 0;
  while (true) {
    const placedRow = placeSand(cave);
    i++;
    if (placedRow === 0) {
      return i;
    }
  }
};
