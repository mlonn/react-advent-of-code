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
      if (j == 0 && i == 0) {
        continue;
      }
      // lower bound
      if (x + j == -1 || y + i == -1) {
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
