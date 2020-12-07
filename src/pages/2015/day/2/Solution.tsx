import { useEffect, useState } from "react";
import input from "./input.txt";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();

  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    const solution = data.split("\n").reduce((previousValue, currentValue) => {
      let [l, w, h] = currentValue.split("x").map((v) => parseInt(v));
      const paper = 2 * l * w + 2 * w * h + 2 * h * l;
      const min = Math.min(l * w, w * h, h * l);
      return previousValue + paper + min;
    }, 0);
    setSolution1(solution);
  };
  const part2 = () => {
    const solution = data.split("\n").reduce((previousValue, currentValue) => {
      let [s, m, l] = currentValue
        .split("x")
        .map((v) => parseInt(v))
        .sort((a, b) => a - b);
      console.log(s, m, l);
      const ribbon = s * 2 + m * 2 + s * m * l;
      return previousValue + ribbon;
    }, 0);
    setSolution2(solution);
  };

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);
  return (
    <div>
      <div>
        <button onClick={part1}>[Solve part 1]</button>
        {solution1}
      </div>
      <button onClick={part2}>[Solve part 2]</button>
      {solution2}
    </div>
  );
};

export default Solution;
