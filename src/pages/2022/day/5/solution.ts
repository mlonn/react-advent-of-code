import { lines } from "../../../../utils/helpers";

const stacks = [
  ["N", "C", "R", "T", "M", "Z", "P"],
  ["D", "N", "T", "S", "B", "Z"],
  ["M", "H", "Q", "R", "F", "C", "T", "G"],
  ["G", "R", "Z"],
  ["Z", "N", "R", "H"],
  ["F", "H", "S", "W", "P", "Z", "L", "D"],
  ["W", "D", "Z", "R", "C", "G", "M"],
  ["S", "J", "F", "L", "H", "W", "Z", "Q"],
  ["S", "Q", "P", "W", "N"],
];

const copy = () => {
  const s: string[][] = [];
  for (const stack of stacks) {
    s.push([...stack]);
  }
  return s;
};

export const part1 = (input: string) => {
  const s = copy();
  lines(input).forEach((line) => {
    const match = line.match(/move (.*) from (.*) to (.*)/);
    if (match) {
      const [, n, from, to] = match;
      for (let i = 0; i < parseInt(n); i++) {
        const thing = s[parseInt(from) - 1].pop();
        if (thing) {
          s[parseInt(to) - 1]?.push(thing);
        }
      }
    }
  });
  let top = "";
  for (const stack of s) {
    top += stack[stack.length - 1];
  }
  return top;
};
export const part2 = (input: string) => {
  const s = copy();
  lines(input).forEach((line) => {
    const match = line.match(/move (.*) from (.*) to (.*)/);
    if (match) {
      const [, n, from, to] = match;
      const thing = s[parseInt(from) - 1].splice(s[parseInt(from) - 1].length - parseInt(n), parseInt(n));
      if (thing) {
        s[parseInt(to) - 1]?.push(...thing);
      }
    }
  });
  let top = "";
  for (const stack of s) {
    top += stack[stack.length - 1];
  }
  return top;
};
