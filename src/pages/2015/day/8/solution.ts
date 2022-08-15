import { lines } from "../../../../utils/helpers";

export const part1 = (input: string): number => {
  let chars = 0;
  let mem = 0;
  lines(input).forEach((line) => {
    // eslint-disable-next-line no-eval
    chars += eval(line).length;
    mem += line.length;
  });
  return mem - chars;
};
export const part2 = (input: string): number => {
  let escaped = 0;
  let mem = 0;
  lines(input).forEach((line) => {
    escaped += JSON.stringify(line).length;
    mem += line.length;
  });
  return escaped - mem;
};
