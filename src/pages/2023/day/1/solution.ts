import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  let sum = 0;
  lines(input).forEach((line) => {
    let first, second;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (!isNaN(+c)) {
        first = c;
        break;
      }
    }
    for (let i = line.length - 1; i > -1; i--) {
      const c = line[i];
      if (!isNaN(+c)) {
        second = c;
        break;
      }
    }
    if (first && second) {
      sum += +(first + second);
    }
  });
  return sum;
};
interface N {
  n?: string;
  i: number;
  r?: RegExp;
}

export const part2 = (input: string) => {
  const r = [
    { r: /one/g, n: "1" },
    { r: /two/g, n: "2" },
    { r: /three/g, n: "3" },
    { r: /four/g, n: "4" },
    { r: /five/g, n: "5" },
    { r: /six/g, n: "6" },
    { r: /seven/g, n: "7" },
    { r: /eight/g, n: "8" },
    { r: /nine/g, n: "9" },
    { r: /1/g, n: "1" },
    { r: /2/g, n: "2" },
    { r: /3/g, n: "3" },
    { r: /4/g, n: "4" },
    { r: /5/g, n: "5" },
    { r: /6/g, n: "6" },
    { r: /7/g, n: "7" },
    { r: /8/g, n: "8" },
    { r: /9/g, n: "9" },
  ];

  let sum = 0;
  lines(input).forEach((line) => {
    let first: N = { i: line.length };
    let second: N = { i: -1 };
    for (const rs of r) {
      first = f(rs, line, first, true);
    }
    for (const rs of r) {
      second = f(rs, line, second, false);
    }

    if (first.n && second.n) {
      sum += +`${first.n}${second.n}`;
    }
  });
  return sum;
};

const f = (v: { r: RegExp; n: string }, line: string, n: N, first: boolean) => {
  const mm = line.matchAll(v.r);
  if (!mm) return n;
  let next = n;
  let m = mm.next().value;
  while (m) {
    if (first) {
      if (m.index < next.i) {
        next = { n: v.n, i: m.index, r: v.r };
      }
    } else {
      if (m.index > next.i) {
        next = { n: v.n, i: m.index, r: v.r };
      }
    }
    m = mm.next().value;
  }
  return next;
};
