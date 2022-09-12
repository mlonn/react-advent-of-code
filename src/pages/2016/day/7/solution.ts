import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  return lines(input).filter((line) => {
    let inBrackets = false;
    let insideBracketRules = true;
    let outsideBracketRules = false;
    for (let i = 0; i < line.length - 3; i++) {
      if (line[i] === "[") {
        inBrackets = true;
        continue;
      }
      if (line[i] === "]") {
        inBrackets = false;
        continue;
      }
      const a = line[i] + line[i + 1];
      const b = line[i + 2] + line[i + 3];

      if (a.includes("[") || a.includes("]")) {
        continue;
      }
      if (b.includes("[") || b.includes("]")) {
        continue;
      }
      if (inBrackets) {
        if (a === [...b.split("")].reverse().join("")) {
          insideBracketRules = false;
        }
      } else {
        if (a !== b && a === [...b.split("")].reverse().join("")) {
          outsideBracketRules = true;
        }
      }
    }
    return insideBracketRules && outsideBracketRules;
  }).length;
};
export const part2 = (input: string) => {
  return lines(input).filter((line) => {
    let supportsSSL = false;
    let inBrackets = false;

    for (let i = 0; i < line.length - 2; i++) {
      if (line[i] === "[") {
        inBrackets = true;
        continue;
      }
      if (line[i] === "]") {
        inBrackets = false;
        continue;
      }
      if (inBrackets) {
        continue;
      }
      const aba = line.slice(i, i + 3);
      if (aba.includes("[") || aba.includes("]")) {
        continue;
      }
      if (aba[0] !== aba[2]) {
        continue;
      }
      if (aba[0] === aba[1]) {
        continue;
      }

      const match = line.match(/\[[a-z]*\]/g);
      if (match) {
        if ([...match].some((s) => s.includes(`${aba[1]}${aba[0]}${aba[1]}`))) {
          supportsSSL = true;
        }
      }
    }
    return supportsSSL;
  }).length;
};
