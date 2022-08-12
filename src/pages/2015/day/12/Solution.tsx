import { useEffect, useState } from "react";
import input from "./input.txt";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    setSolution1(sum(JSON.parse(data)));
  };
  const sum = (input: any): number => {
    let n = 0;
    if (Array.isArray(input)) {
      input.forEach((v) => (n += sum(v)));
    } else if (typeof input === "object") {
      Object.values(input).forEach((v) => (n += sum(v)));
    } else if (!isNaN(+input)) {
      n += +input;
    }
    return n;
  };
  const sum2 = (input: any): number => {
    let n = 0;

    if (Array.isArray(input)) {
      input.forEach((v) => (n += sum2(v)));
    } else if (typeof input === "object") {
      if (!Object.values(input).includes("red")) {
        Object.values(input).forEach((v) => (n += sum2(v)));
      }
    } else if (!isNaN(+input)) {
      n += +input;
    }
    return n;
  };
  const part2 = () => {
    setSolution2(sum2(JSON.parse(data)));
  };

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);
  return (
    <div>
      <h2>--- Day 9: All in a Single Night ---</h2>
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
