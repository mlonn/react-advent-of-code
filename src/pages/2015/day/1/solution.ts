export const part1 = (input: string): number => {
  return input
    .split("")
    .reduce((acc, curr) => (curr === "(" ? acc + 1 : acc - 1), 0);
};

export const part2 = (input: string): number => {
  let level = 0;
  const instructions = input.split("");
  for (const index in instructions) {
    level = instructions[index] === "(" ? level + 1 : level - 1;
    if (level === -1) {
      return parseInt(index) + 1;
    }
  }
  return -1;
};
