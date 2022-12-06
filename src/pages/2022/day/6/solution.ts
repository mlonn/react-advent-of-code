const go = (size: number, input: string) => {
  for (let i = 0; i < input.length; i++) {
    const s = input.slice(i, i + size);
    const set = new Set(s);
    if (set.size === size) {
      return i + size;
    }
  }
};
export const part1 = (input: string) => {
  return go(4, input);
};
export const part2 = (input: string) => {
  return go(14, input);
};
