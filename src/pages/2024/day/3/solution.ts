import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  const a = lines(input)
    .join("")
    .matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g);

  const b = Array.from(a);
  let sum = 0;
  for (const regExpMatchArray of b) {
    sum += +regExpMatchArray[1] * +regExpMatchArray[2];
  }
  return sum;
};

export const part2 = (input: string) => {
  const a = lines(input).join("");

  let mul = true;
  let sum = 0;
  for (const regExpMatchArray of a) {
    if (regExpMatchArray[0] === "do()") {
      mul = true;
    }
    if (regExpMatchArray[0] === "don't()") {
      mul = false;
    }
    if (mul && regExpMatchArray[1] && regExpMatchArray[2]) {
      sum += +regExpMatchArray[1] * +regExpMatchArray[2];
    }
  }

  return sum;
};
