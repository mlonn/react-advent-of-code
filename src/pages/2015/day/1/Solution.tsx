import { useState } from "react";
import input from "./input";

interface Props {}

export const part1 = (input: string): number => {
  return input
    .split("")
    .reduce((acc, curr) => (curr === "(" ? acc + 1 : acc - 1), 0);
};

export const part2 = (input: string): number => {
  let level = 0;
  const instructions = input.split("");
  for (const index in instructions) {
    level = instructions[index] === "(" ? level + 1 : level - 1;
    if (level === -1) {
      return parseInt(index) + 1;
    }
  }
  return -1;
};

const Solution = (props: Props) => {
  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  return (
    <div>
      <h2>--- Day 1: Not Quite Lisp ---</h2>
      <div>
        <button onClick={() => setSolution1(part1(input))}>
          [Solve part 1]
        </button>
        {solution1}
      </div>
      <div>
        <button onClick={() => setSolution2(part2(input))}>
          [Solve part 2]
        </button>
        {solution2}
      </div>
    </div>
  );
};

export default Solution;
