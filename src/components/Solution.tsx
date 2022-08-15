import { useState } from "react";
import { Solver } from "../types";
interface Props {
  title: string;
  input: string;
  part1: Solver;
  part2: Solver;
}
const Solution = ({ title, part1, part2, input }: Props) => {
  const [solution1, setSolution1] = useState<number | string>();
  const [solution2, setSolution2] = useState<number | string>();
  return (
    <div>
      <h2>--- {title} ---</h2>
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
