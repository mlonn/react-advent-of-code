import { lines } from "../../../../utils/helpers";

export const part1 = (input: string) => {
  const triangles = lines(input).reduce((acc: number[][], line) => {
    const match = line.match(/\s*(\d*)\s+(\d*)\s+(\d*)/);
    if (match) {
      const triangle = matchTriange(line);
      return [...acc, triangle];
    }
    return acc;
  }, []);
  const correct = triangles.filter(([a, b, c]) => {
    return a + b > c && a + c > b && b + c > a;
  });
  return correct.length;
};

const matchTriange = (line: string) => {
  const match = line.match(/\s*(\d*)\s+(\d*)\s+(\d*)/);
  if (match) {
    const [, a, b, c] = match;
    return [+a, +b, +c];
  }
  throw new Error("Wrong format on line");
};

export const part2 = (input: string) => {
  const l = lines(input);
  const triangles = [];
  for (let i = 0; i < l.length; i += 3) {
    const one = matchTriange(l[i]);
    const two = matchTriange(l[i + 1]);
    const three = matchTriange(l[i + 2]);
    triangles.push([one[0], two[0], three[0]]);
    triangles.push([one[1], two[1], three[1]]);
    triangles.push([one[2], two[2], three[2]]);
  }
  const correct = triangles.filter(([a, b, c]) => {
    return a + b > c && a + c > b && b + c > a;
  });
  return correct.length;
};
