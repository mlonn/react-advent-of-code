import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  const left: number[] = [];
  const right: number[] = [];
  lines(input).forEach((line) => {
    const [a, b] = line.split("   ").map((l) => +l);
    left.push(a);
    right.push(b);
  });
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < left.length; i++) {
    sum += Math.abs(left[i] - right[i]);
  }
  return sum;
};
export const part2 = (input: string) => {
  const left: number[] = [];
  const right: { [key: number]: number } = {};
  lines(input).forEach((line) => {
    const [a, b] = line.split("   ").map((l) => +l);
    left.push(a);
    if (right[b]) {
      right[b] += 1;
    } else {
      right[b] = 1;
    }
  });
  let sum = 0;
  for (let i = 0; i < left.length; i++) {
    sum += left[i] * (right[left[i]] ?? 0);
  }
  return sum;
};
