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
