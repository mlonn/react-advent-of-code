import { primeFactors } from "../../../../utils/helpers";

const input = 34000000;
function presentsForHousePart1(n: number) {
  return 10 * primeFactors(n).reduce((p, c) => p + c, 0);
}

function presentsForHousePart2(n: number) {
  return (
    11 *
    primeFactors(n).reduce((p, c) => {
      return p + (n / c > 50 ? 0 : c);
    }, 0)
  );
}
export const part1 = (i: string) => {
  let house = 1;
  while (presentsForHousePart1(house) <= input) {
    house++;
  }
  return house;
};
export const part2 = (i: string) => {
  let house = 1;
  while (presentsForHousePart2(house) <= input) {
    house++;
  }
  return house;
};
