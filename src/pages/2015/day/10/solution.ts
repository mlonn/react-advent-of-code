const looksay = (input: string): string => {
  let output = "";
  let count = 1;
  let currentChar = input[0];
  for (let i = 1; i < input.length; i++) {
    const char = input[i];
    if (currentChar === char) {
      count++;
    } else {
      output += count + input[i - 1];
      currentChar = char;
      count = 1;
    }
  }
  output += count + input[input.length - 1];
  return output;
};

export const part1 = (input: string): number => {
  let current = input;
  for (let i = 0; i < 40; i++) {
    current = looksay(current);
  }
  return current.length;
};
export const part2 = (input: string): number => {
  let current = input;
  for (let i = 0; i < 50; i++) {
    current = looksay(current);
  }
  return current.length;
};
