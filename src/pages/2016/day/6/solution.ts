import { lines } from "../../../../utils/helpers";

function parse(input: string) {
  const freq: { [key: string]: { [key: string]: number } } = {};
  lines(input).forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      if (!freq[i]) {
        freq[i] = {};
      }
      const c = line[i];
      if (freq[i][c]) {
        freq[i][c]++;
      } else {
        freq[i][c] = 1;
      }
    }
  });
  return freq;
}

export const part1 = (input: string) => {
  const freq = parse(input);
  return Object.entries(freq).reduce((p, [position, values]) => {
    let max = 0;
    let char = "";
    Object.entries(values).forEach(([c, i]) => {
      if (i > max) {
        max = i;
        char = c;
      }
    });
    return p + char;
  }, "");
};
export const part2 = (input: string) => {
  const freq = parse(input);

  return Object.entries(freq).reduce((p, [position, values]) => {
    let min = Infinity;
    let char = "";
    Object.entries(values).forEach(([c, i]) => {
      if (i < min) {
        min = i;
        char = c;
      }
    });
    return p + char;
  }, "");
};
