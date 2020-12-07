import { useEffect, useState } from "react";
import input from "./input.txt";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();

  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    const solution = data
      .split("")
      .reduce((acc, curr) => (curr === "(" ? acc + 1 : acc - 1), 0);
    setSolution1(solution);
  };
  const part2 = () => {
    let level = 0;
    const instructions = data.split("");
    for (const index in instructions) {
      level = instructions[index] === "(" ? level + 1 : level - 1;
      if (level === -1) {
        setSolution2(parseInt(index) + 1);
        break;
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
      <h2>--- Day 1: Not Quite Lisp ---</h2>
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
