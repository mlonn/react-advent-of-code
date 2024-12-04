import { lines } from "../../../../utils/helpers";

const isSafe = (level: number[]) => {
  let increase = false;
  let decrease = false;
  for (let i = 1; i < level.length; i++) {
    if (Math.abs(level[i] - level[i - 1]) === 0 || Math.abs(level[i] - level[i - 1]) > 3) {
      return false;
    }
    if (level[i] > level[i - 1]) {
      increase = true;
    }
    if (level[i] < level[i - 1]) {
      decrease = true;
    }
    if (increase && decrease) {
      return false;
    }
  }
  return true;
};

export const part1 = (input: string) => {
  const levels = lines(input).map((line) => line.split(" ").map((l) => +l));
  const safe = levels.filter(isSafe);
  return safe.length;
};
export const part2 = (input: string) => {
  const levels = lines(input).map((line) => line.split(" ").map((l) => +l));
  const safe = levels.filter((level) => {
    const s = isSafe(level);
    if (!s) {
      let safeIfRemove = false;
      for (let i = 0; i < level.length; i++) {
        let cp = [...level];
        cp.splice(i, 1);
        safeIfRemove = isSafe(cp);
        if (safeIfRemove) {
          return true;
        }
      }
      return false;
    }
    return true;
  });
  return safe.length;
};
