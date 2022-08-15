import { useEffect, useState } from "react";
import input from "./input.txt";
import { lines } from "../../../../utils/helpers";

interface Props {}
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

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  function getSues() {
    const sues: Sue[] = [];
    lines(data).forEach((line, index) => {
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

  const rightSue: Sue = {
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
  const part1 = () => {
    const sues = getSues();

    for (const sueIndex in sues) {
      const sue = sues[sueIndex];
      let correct = true;
      for (const key of Object.keys(sue)) {
        if (rightSue[key as keyof Sue] !== sue[key as keyof Sue]) {
          correct = false;
          break;
        }
      }
      if (correct) {
        setSolution1(+sueIndex + 1);
      }
    }
  };

  const part2 = () => {
    const sues = getSues();
    for (const sueIndex in sues) {
      const sue = sues[sueIndex];
      let correct = true;
      for (const quality in sue) {
        const key = quality as keyof Sue;
        const currentValue = sue[key];
        const rightValue = rightSue[key];
        if (!currentValue) {
          continue;
        }
        if (!rightValue) {
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
        setSolution2(+sueIndex + 1);
      }
    }
  };

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);

  return (
    <div>
      <h2>--- Day 16: Aunt Sue ---</h2>
      <div>
        <button onClick={part1}>[Solve part 1]</button>
        {solution1}
      </div>
      <div>
        <button onClick={part2}>[Solve part 2]</button>
        {solution2}
      </div>
    </div>
  );
};

export default Solution;
