import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  const sums: number[] = [];
  let sum = 0;
  lines(input).forEach((line) => {
    const number = parseInt(line);
    if (!number) {
      sums.push(sum);
      sum = 0;
    } else {
      sum += number;
    }
  });
  return Math.max(...sums);
};
export const part2 = (input: string) => {
  const sums: number[] = [];
  let sum = 0;
  lines(input).forEach((line) => {
    const number = parseInt(line);
    if (!number) {
      sums.push(sum);
      sum = 0;
    } else {
      sum += number;
    }
  });
  sums.sort((a, b) => b - a);

  return sums[0] + sums[1] + sums[2];
};
