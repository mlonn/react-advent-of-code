import { grid } from "../../../../utils/helpers";

const check = (g: number[][], row: number, col: number): boolean => {
  const tree = g[row][col];
  let upRow = 0;
  while (upRow < row && upRow < g.length - 1) {
    if (g[upRow][col] >= tree) {
      break;
    }
    upRow++;
  }
  if (upRow === row) {
    return true;
  }
  let downRow = g.length - 1;
  while (downRow > row && downRow > 0) {
    if (g[downRow][col] >= tree) {
      break;
    }
    downRow--;
  }
  if (downRow === row) {
    return true;
  }
  let rightCol = 0;
  while (rightCol < col && rightCol < g[row].length - 1) {
    if (g[row][rightCol] >= tree) {
      break;
    }
    rightCol++;
  }
  if (rightCol === col) {
    return true;
  }
  let leftCol = g[row].length - 1;
  while (leftCol > col && leftCol > 0) {
    if (g[row][leftCol] >= tree) {
      break;
    }
    leftCol--;
  }
  if (leftCol === col) {
    return true;
  }
  return false;
};
const sight = (g: number[][], row: number, col: number): number => {
  const tree = g[row][col];
  let upRow = row - 1;
  let upVisible = 0;

  while (upRow >= 0) {
    upVisible++;
    if (g[upRow][col] >= tree) {
      break;
    }
    upRow--;
  }

  let downRow = row + 1;
  let downVisible = 0;

  while (downRow < g.length) {
    downVisible++;
    if (g[downRow][col] >= tree) {
      break;
    }
    downRow++;
  }
  let rightCol = col + 1;
  let rightVisible = 0;
  while (rightCol < g[row].length) {
    rightVisible++;
    if (g[row][rightCol] >= tree) {
      break;
    }
    rightCol++;
  }

  let leftCol = col - 1;
  let leftVisible = 0;
  while (leftCol >= 0) {
    leftVisible++;
    if (g[row][leftCol] >= tree) {
      break;
    }
    leftCol--;
  }
  return upVisible * downVisible * rightVisible * leftVisible;
};
export const part1 = (input: string) => {
  const g = grid(input).map((row) => row.map((cell) => parseInt(cell)));
  let visible = 0;
  for (let row = 0; row < g.length; row++) {
    for (let col = 0; col < g[row].length; col++) {
      if (check(g, row, col)) {
        visible++;
      }
    }
  }
  return visible;
};
export const part2 = (input: string) => {
  const g = grid(input).map((row) => row.map((cell) => parseInt(cell)));
  let visible = 0;
  for (let row = 0; row < g.length; row++) {
    for (let col = 0; col < g[row].length; col++) {
      const c = sight(g, row, col);
      if (c > visible) {
        visible = c;
      }
    }
  }
  return visible;
};
