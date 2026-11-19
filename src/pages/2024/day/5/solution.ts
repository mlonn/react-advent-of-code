import { lines } from "../../../../utils/helpers";

function parse(input: string) {
  const a: string[] = [];
  const b: string[] = [];
  let done = false;
  lines(input).forEach((line) => {
    if (line === "") {
      done = true;
    } else if (!done) {
      a.push(line);
    } else {
      b.push(line);
    }
  });
  let rules = a.map((k) => k.split("|").map((l) => +l));
  let updates = b.map((k) => k.split(",").map((l) => +l));
  return { rules, updates };
}

export const part1 = (input: string) => {
  const { rules, updates } = parse(input);
  let count = 0;
  for (let i = 0; i < updates.length; i++) {
    const pages = updates[i];
    let valid = isValid(pages, rules);
    if (valid) {
      count += pages[Math.floor(pages.length / 2)];
    }
  }
  return count;
};
export const part2 = (input: string) => {
  const { rules, updates } = parse(input);
  const invalid = [];
  for (let i = 0; i < updates.length; i++) {
    const pages = updates[i];
    let valid = isValid(pages, rules);
    if (!valid.valid) {
      invalid.push(pages);
    }
  }
  let count = 0;
  for (let i = 0; i < invalid.length; i++) {
    const pages = invalid[i];

    while (true) {
      let { xi, yi, valid } = isValid(pages, rules);
      if (valid) {
        count += pages[Math.floor(pages.length / 2)];
        break;
      }
      moveElement(pages, xi, yi);
    }
  }
  return count;
};

const isValid = (pages: number[], rules: number[][]) => {
  for (let j = 0; j < rules.length; j++) {
    const [x, y] = rules[j];
    const xi = pages.indexOf(x);
    const yi = pages.indexOf(y);
    if (xi === -1 || yi === -1) {
      // rule not applicable
      continue;
    }
    if (xi >= yi) {
      return { xi, yi, valid: false };
    }
  }
  return { xi: -1, yi: -1, valid: true };
};

function moveElement(array: number[], fromIndex: number, toIndex: number) {
  if (fromIndex >= array.length || toIndex >= array.length || fromIndex < 0 || toIndex < 0) {
    console.error("Invalid indices");
    return array;
  }

  const element = array.splice(fromIndex, 1)[0]; // Remove the element
  array.splice(toIndex, 0, element); // Insert the element at the new position
  return array;
}
