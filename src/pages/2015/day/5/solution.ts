import { lines } from "../../../../utils/helpers";

export const part1 = (input: string): number => {
  const vowels = "aeiou";
  const bad = ["ab", "cd", "pq", "xy"];
  return lines(input)
    .filter((line) => !bad.some((b) => line.includes(b)))
    .filter(
      (line) => line.split("").filter((c) => line.includes(c + c)).length > 0
    )
    .filter(
      (line) => line.split("").filter((c) => vowels.includes(c)).length >= 3
    ).length;
};
export const part2 = (input: string): number => {
  return lines(input)
    .filter((line) => {
      const chars = line.split("");
      return chars.find((c, i) => chars[i + 2] === c);
    })
    .filter(
      (line) =>
        line.split("").filter((c, i) => {
          return line.split(c + line[i + 1]).length > 2;
        }).length > 0
    ).length;
};
