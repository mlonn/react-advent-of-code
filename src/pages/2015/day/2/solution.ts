import { lines } from "../../../../utils/helpers";

export const part1 = (input: string): number => {
  return lines(input).reduce((previousValue, currentValue) => {
    let [l, w, h] = currentValue.split("x").map((v) => parseInt(v));
    const paper = 2 * l * w + 2 * w * h + 2 * h * l;
    const min = Math.min(l * w, w * h, h * l);
    return previousValue + paper + min;
  }, 0);
};
export const part2 = (input: string): number => {
  return lines(input).reduce((previousValue, currentValue) => {
    let [s, m, l] = currentValue
      .split("x")
      .map((v) => parseInt(v))
      .sort((a, b) => a - b);
    const ribbon = s * 2 + m * 2 + s * m * l;
    return previousValue + ribbon;
  }, 0);
};
