import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  let points = 0;
  const cards = parseCards(input);
  for (const { winningValue, mineValue } of cards) {
    let match = 0;
    for (const number of mineValue) {
      if (winningValue.includes(number)) {
        match++;
      }
    }
    if (match > 0) {
      points += Math.pow(2, match - 1);
    }
  }
  return points;
};

export const part2 = (input: string) => {
  const cards = parseCards(input);
  const s = new Map<number, number>();

  for (const { cardNumber } of cards) {
    s.set(cardNumber, 1);
  }
  for (const { winningValue, mineValue, cardNumber } of cards) {
    let match = 0;
    console.log("card", cardNumber);
    for (const number of mineValue) {
      if (winningValue.includes(number)) {
        match++;
      }
    }
    if (match > 0) {
      console.log(match);
      for (let i = 1; i <= match; i++) {
        const next = cardNumber + i;
        s.set(next, s.get(next)! + s.get(cardNumber)!);
        console.log("card", next, "instances", s.get(next));
      }
    }
  }
  return Array.from(s.values()).reduce((acc, v) => acc + v, 0);
};

function parseCards(input: string) {
  return lines(input).map((line) => {
    const card = line.split(":");
    const cardNumber = +card[0].split(" ").filter((v) => v !== "")[1];

    const [winning, mine] = card[1].split("|");

    const winningValue = winning
      .split(" ")
      .filter((v) => v !== "")
      .map((v) => +v);
    const mineValue = mine
      .split(" ")
      .filter((v) => v !== "")
      .map((v) => +v);

    return { cardNumber, winningValue, mineValue };
  });
}
