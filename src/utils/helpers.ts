export interface Point {
  x: number;
  y: number;
}

export function permute<T>(permutation: T[]): T[][] {
  let length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

export function gcd(a: number, b: number): number {
  return !b ? a : gcd(b, a % b);
}

export interface Point {
  x: number;
  y: number;
}
export function manhattan(p: Point, q: Point): number {
  return Math.abs(p.x - q.x) + Math.abs(p.y - q.y);
}

export function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b);
}

export function numbers(data: string) {
  return lines(data).map((line) => +line);
}

export function lines(data: string) {
  return data.split("\n");
}

export function grid(data: string): string[][] {
  return lines(data).map((line) => line.split(""));
}
export const DirectionList = ["U", "UR", "UL", "R", "D", "DL", "DR", "L"];
export type Direction = typeof DirectionList[number];
export const Directions: { [key in Direction]: Point } = {
  U: { x: 0, y: -1 },
  UR: { x: 1, y: -1 },
  UL: { x: -1, y: -1 },
  D: { x: 0, y: 1 },
  DR: { x: 1, y: 1 },
  DL: { x: -1, y: 1 },
  R: { x: 1, y: 0 },
  L: { x: -1, y: 0 },
};

export function primeFactors(n: number) {
  let factors = [1];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i * i !== n) factors.push(n / i);
    }
  }

  if (n > 1) {
    factors.push(n);
  }

  return factors.sort((a, b) => a - b);
}

export function getValue<T>(x: number, y: number, grid: T[][]): T | null {
  if (grid.length === 0) {
    return null;
  }
  const width = grid[0].length;
  const height = grid.length;
  if (x < 0 || y < 0 || x >= width || y >= height) {
    return null;
  }
  return grid[y][x];
}

export function getDiagonal<T>(x: number, y: number, grid: T[][]): T[][] | null {
  if (grid.length === 0) {
    return null;
  }
  const v = getValue(x, y, grid);
  if (!v) {
    return null;
  }
  const ur = getValue(x + Directions.UR.x, y + Directions.UR.y, grid);
  if (!ur) {
    return null;
  }
  const dl = getValue(x + Directions.DL.x, y + Directions.DL.y, grid);
  if (!dl) {
    return null;
  }
  const ul = getValue(x + Directions.UL.x, y + Directions.UL.y, grid);
  if (!ul) {
    return null;
  }
  const dr = getValue(x + Directions.DR.x, y + Directions.DR.y, grid);
  if (!dr) {
    return null;
  }
  return [
    [ur, v, dl],
    [ul, v, dr],
  ];
}
export function getNeighbours<T>(x: number, y: number, grid: T[][]): T[] {
  const neighbours: T[] = [];
  if (grid.length === 0) {
    return [];
  }
  const width = grid[0].length;
  const height = grid.length;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      // Dont check our self
      if (j === 0 && i === 0) {
        continue;
      }
      // lower bound
      if (x + j === -1 || y + i === -1) {
        continue;
      }
      // upper bound
      if (x + j >= width || y + i >= height) {
        continue;
      }
      neighbours.push(grid[y + i][x + j]);
    }
  }
  return neighbours;
}

export function getNeighboursWithCoordinates<T>(x: number, y: number, grid: T[][]): { x: number; y: number; v: T }[] {
  const neighbours: { x: number; y: number; v: T }[] = [];
  if (grid.length === 0) {
    return [];
  }
  const width = grid[0].length;
  const height = grid.length;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      // Dont check our self
      if (j === 0 && i === 0) {
        continue;
      }
      // lower bound
      if (x + j === -1 || y + i === -1) {
        continue;
      }
      // upper bound
      if (x + j >= width || y + i >= height) {
        continue;
      }
      neighbours.push({ y: y + i, x: x + j, v: grid[y + i][x + j] });
    }
  }
  return neighbours;
}

export function goDirection<T>(x: number, y: number, direction: Direction, grid: T[][]): { v: T; x: number; y: number } | null {
  if (grid.length === 0) {
    return null;
  }
  const width = grid[0].length;
  const height = grid.length;
  const d = Directions[direction];
  // lower bound
  if (x + d.x === -1 || y + d.y === -1) {
    return null;
  }
  // upper bound
  if (x + d.x >= width || y + d.y >= height) {
    return null;
  }
  const dx = x + d.x;
  const dy = y + d.y;
  return { v: grid[y + d.y][x + d.x], x: dx, y: dy };
}
export function printGrid(grid: string[][]) {
  for (const row of grid) {
    console.log(row.join(""));
  }
}
