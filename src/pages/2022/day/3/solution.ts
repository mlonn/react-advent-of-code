import { lines } from "../../../../utils/helpers";

const priority = (item: string): number => {
  const charcode = item.charCodeAt(0);
  if (charcode >= 97) {
    return charcode - 96;
  } else {
    return charcode - 38;
  }
};
export const part1 = (input: string) => {
  let sum = 0;
  lines(input).forEach((rucksack) => {
    const first = rucksack.slice(0, rucksack.length / 2);
    const second = rucksack.slice(rucksack.length / 2);
    console.log(first, second);
    let inBoth;
    for (let i = 0; i < first.length; i++) {
      if (second.includes(first.charAt(i))) {
        inBoth = first.charAt(i);
        break;
      }
    }
    if (inBoth) {
      sum += priority(inBoth);
    }
  });
  return sum;
};
export const part2 = (input: string) => {
  let sum = 0;

  const rucksacks = lines(input);
  for (let i = 0; i < rucksacks.length; i += 3) {
    const a = rucksacks[i];
    const b = rucksacks[i + 1];
    const c = rucksacks[i + 2];
    let inAll;
    for (let j = 0; j < a.length; j++) {
      const current = a[j];
      if (b.includes(current) && c.includes(current)) {
        inAll = current;
      }
    }
    if (inAll) {
      sum += priority(inAll);
    }
  }
  return sum;
};
