import { numbers } from "../../../../utils/helpers";

function combinations(arr: number[]) {
  const fn = (active: number[], rest: number[], a: number[][]) => {
    if (active.length === 0 && rest.length === 0) return [];
    const sum = active.reduce((sum, size) => sum + size, 0);
    if (rest.length === 0) {
      if (sum === 150) {
        a.push(active);
      }
    } else if (sum <= 150) {
      fn([...active, rest[0]], rest.slice(1), a);
      fn(active, rest.slice(1), a);
    }
    return a;
  };
  return fn([], arr, []);
}
export const part1 = (input: string): number => {
  const buckets = numbers(input);
  return combinations(buckets).length;
};

export const part2 = (input: string): number => {
  const buckets = numbers(input);
  const valid = combinations(buckets);
  const min = valid.reduce((min, v) => {
    if (v.length < min) {
      return v.length;
    }
    return min;
  }, Infinity);

  return valid.filter((v) => v.length === min).length;
};
