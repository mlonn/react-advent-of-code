import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  let ip = 0;
  let x = 1;
  let signalStrength = 0;
  lines(input).forEach((line) => {
    const instructions = line.split(" ");

    if (instructions.length === 2) {
      const amount = parseInt(instructions[1]);
      ip++;
      if (ip === 20 || (ip + 20) % 40 === 0) {
        console.log(ip, x, ip * x, line);
        signalStrength += ip * x;
      }
      ip++;
      if (ip === 20 || (ip + 20) % 40 === 0) {
        console.log(ip, x, ip * x, line);
        signalStrength += ip * x;
      }
      x += amount;
    } else {
      ip++;
      if (ip === 20 || (ip + 20) % 40 === 0) {
        console.log(ip, x, ip * x, line);
        signalStrength += ip * x;
      }
    }
  });

  return signalStrength;
};
export const part2 = (input: string) => {
  let ip = 0;
  let x = 1;
  let signalStrength = 0;
  let output = "";
  lines(input).forEach((line) => {
    const instructions = line.split(" ");

    if (instructions.length === 2) {
      const amount = parseInt(instructions[1]);
      ip++;
      if (x === ip % 40 || x + 1 === ip % 40 || x + 2 === ip % 40) {
        output += "#";
      } else {
        output += ".";
      }
      if (ip % 40 === 0) {
        console.log(output, x, ip);
        output = "";
      }
      ip++;
      if (x === ip % 40 || x + 1 === ip % 40 || x + 2 === ip % 40) {
        output += "#";
      } else {
        output += ".";
      }
      if (ip % 40 === 0) {
        console.log(output, x, ip);
        output = "";
      }
      x += amount;
    } else {
      ip++;
      if (x === ip % 40 || x + 1 === ip % 40 || x + 2 === ip % 40) {
        output += "#";
      } else {
        output += ".";
      }
      if (ip % 40 === 0) {
        console.log(output, x, ip);
        output = "";
      }
    }
  });

  return signalStrength;
};
