export const part1 = (input: string): number => {
  return sum(JSON.parse(input));
};
const sum = (input: any): number => {
  let n = 0;
  if (Array.isArray(input)) {
    input.forEach((v) => (n += sum(v)));
  } else if (typeof input === "object") {
    Object.values(input).forEach((v) => (n += sum(v)));
  } else if (!isNaN(+input)) {
    n += +input;
  }
  return n;
};
const sum2 = (input: any): number => {
  let n = 0;

  if (Array.isArray(input)) {
    input.forEach((v) => (n += sum2(v)));
  } else if (typeof input === "object") {
    if (!Object.values(input).includes("red")) {
      Object.values(input).forEach((v) => (n += sum2(v)));
    }
  } else if (!isNaN(+input)) {
    n += +input;
  }
  return n;
};
export const part2 = (input: string): number => {
  return sum2(JSON.parse(input));
};
