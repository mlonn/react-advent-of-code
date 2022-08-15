import md5 from "md5";

export const part1 = (input: string): number => {
  let count = 0;
  while (true) {
    const hash = md5(`${input}${count}`);
    if (hash.startsWith("00000")) {
      break;
    }
    count++;
  }
  return count;
};
export const part2 = (input: string): number => {
  let count = 0;
  while (true) {
    const hash = md5(`${input}${count}`);
    if (hash.startsWith("000000")) {
      break;
    }
    count++;
  }
  return count;
};
