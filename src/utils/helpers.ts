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

export function lcm(a: number, b: number) {
  return (a * b) / gcd(a, b);
}

export function numbers(data: string) {
  const buckets: number[] = [];
  lines(data).forEach((line, index) => {
    buckets.push(+line);
  });
  return buckets;
}

export function lines(data: string) {
  return data.split("\n");
}

export function grid(data: string): string[][] {
  return lines(data).map((line) => line.split(""));
}
export type Direction = "U" | "R" | "D" | "L";
export const Directions: { [key in Direction]: Point } = {
  U: { x: 0, y: -1 },
  R: { x: 1, y: 0 },
  D: { x: 0, y: 1 },
  L: { x: -1, y: 0 },
};

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
