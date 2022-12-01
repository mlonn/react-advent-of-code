import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  let max = 0;
  let sum = 0;
  lines(input).forEach((line) => {
    const number = parseInt(line);
    if (!number) {
      if (sum > max) {
        max = sum;
      }
      sum = 0;
    } else {
      sum += number;
    }
  });
  return max;
};
export const part2 = (input: string) => {
  let max: number[] = [0];

  let sum = 0;
  lines(input).forEach((line) => {
    const number = parseInt(line);
    if (number) {
      sum += number;
    } else {
      if (sum > max[max.length - 1]) {
        max.push(sum);
        max.sort((a, b) => b - a);
        if (max.length > 3) {
          max.pop();
        }
      }
      sum = 0;
    }
  });
  console.log(max);
  return max.reduce((m, a) => m + a, 0);
};
