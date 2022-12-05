import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  let sum = 0;
  lines(input).forEach((line) => {
    const [a, b] = line.split(",");
    const [a1, a2] = a.split("-");
    const [b1, b2] = b.split("-");
    if (parseInt(a1) <= parseInt(b1) && parseInt(b2) <= parseInt(a2)) {
      sum++;
    } else if (parseInt(b1) <= parseInt(a1) && parseInt(a2) <= parseInt(b2)) {
      sum++;
    }
  });
  return sum;
};
export const part2 = (input: string) => {
  let sum = 0;
  lines(input).forEach((line) => {
    const [a, b] = line.split(",");
    const [a1s, a2s] = a.split("-");
    const [b1s, b2s] = b.split("-");
    const a1 = parseInt(a1s);
    const a2 = parseInt(a2s);

    const b1 = parseInt(b1s);
    const b2 = parseInt(b2s);
    if (b1 >= a1 && b1 <= a2) {
      sum++;
    } else if (b2 >= a1 && b2 <= a2) {
      sum++;
    } else if (a1 >= b1 && a1 <= b2) {
      sum++;
    } else if (a2 >= b1 && a2 <= b2) {
      sum++;
    }
  });
  return sum;
};
