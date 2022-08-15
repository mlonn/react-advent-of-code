import { lines } from "../../../../utils/helpers";

type Sue = {
  children?: number;
  cats?: number;
  samoyeds?: number;
  pomeranians?: number;
  akitas?: number;
  vizslas?: number;
  goldfish?: number;
  trees?: number;
  cars?: number;
  perfumes?: number;
};

const RIGHT_SUE: Sue = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

function getSues(input: string): Sue[] {
  const sues: Sue[] = [];
  lines(input).forEach((line, index) => {
    const sue: Sue = {};
    const children = line.match(/.*children: (\d*)/);
    if (children) {
      const [, m] = children;
      sue.children = +m;
    }
    const cats = line.match(/.*cats: (\d*)/);
    if (cats) {
      const [, m] = cats;
      sue.cats = +m;
    }
    const samoyeds = line.match(/.*samoyeds: (\d*)/);
    if (samoyeds) {
      const [, m] = samoyeds;
      sue.samoyeds = +m;
    }
    const pomeranians = line.match(/.*pomeranians: (\d*)/);
    if (pomeranians) {
      const [, m] = pomeranians;
      sue.pomeranians = +m;
    }
    const akitas = line.match(/.*akitas: (\d*)/);
    if (akitas) {
      const [, m] = akitas;
      sue.akitas = +m;
    }
    const vizslas = line.match(/.*vizslas: (\d*)/);
    if (vizslas) {
      const [, m] = vizslas;
      sue.vizslas = +m;
    }
    const goldfish = line.match(/.*goldfish: (\d*)/);
    if (goldfish) {
      const [, m] = goldfish;
      sue.goldfish = +m;
    }
    const trees = line.match(/.*trees: (\d*)/);
    if (trees) {
      const [, m] = trees;
      sue.trees = +m;
    }
    const cars = line.match(/.*cars: (\d*)/);
    if (cars) {
      const [, m] = cars;
      sue.cars = +m;
    }
    const perfumes = line.match(/.*perfumes: (\d*)/);
    if (perfumes) {
      const [, m] = perfumes;
      sue.perfumes = +m;
    }
    sues.push(sue);
  });

  return sues;
}

export const part1 = (input: string): number => {
  const sues = getSues(input);

  for (const sueIndex in sues) {
    const sue = sues[sueIndex];
    let correct = true;
    for (const key of Object.keys(sue)) {
      if (RIGHT_SUE[key as keyof Sue] !== sue[key as keyof Sue]) {
        correct = false;
        break;
      }
    }
    if (correct) {
      return +sueIndex + 1;
    }
  }
  throw new Error("No sue found");
};

export const part2 = (input: string): number => {
  const sues = getSues(input);

  for (const sueIndex in sues) {
    const sue = sues[sueIndex];
    let correct = true;
    for (const quality in sue) {
      const key = quality as keyof Sue;
      const currentValue = sue[key];
      const rightValue = RIGHT_SUE[key];
      if (currentValue === undefined) {
        correct = false;
        continue;
      }
      if (rightValue === undefined) {
        correct = false;
        continue;
      }
      if (quality === "cats" || quality === "trees") {
        if (currentValue <= rightValue) {
          correct = false;
          break;
        }
      } else if (quality === "pomeranians" || quality === "goldfish") {
        if (currentValue >= rightValue) {
          correct = false;
          break;
        }
      } else if (rightValue !== currentValue) {
        correct = false;
        break;
      }
    }
    if (correct) {
      return +sueIndex + 1;
    }
  }
  throw new Error("No sue found");
};
