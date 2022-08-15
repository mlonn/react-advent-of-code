import { useEffect, useState } from "react";
import input from "./input.txt";
import { lines } from "../../../../utils/helpers";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    let chars = 0;
    let mem = 0;
    lines(data).forEach((line) => {
      // eslint-disable-next-line no-eval
      chars += eval(line).length;
      mem += line.length;
    });
    setSolution1(mem - chars);
  };
  const part2 = () => {
    let escaped = 0;
    let mem = 0;
    lines(data).forEach((line) => {
      escaped += JSON.stringify(line).length;
      mem += line.length;
    });
    setSolution2(escaped - mem);
  };

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);
  return (
    <div>
      <h2>--- Day 8: Matchsticks ---</h2>
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
