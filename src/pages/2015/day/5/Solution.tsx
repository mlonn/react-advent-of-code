import { useEffect, useState } from "react";
import input from "./input.txt";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");
  const vowels = "aeiou";
  const bad = ["ab", "cd", "pq", "xy"];
  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    const nice = data
      .split("\n")
      .filter((line) => !bad.some((b) => line.includes(b)))
      .filter(
        (line) => line.split("").filter((c) => line.includes(c + c)).length > 0
      )
      .filter(
        (line) => line.split("").filter((c) => vowels.includes(c)).length >= 3
      );
    console.log(nice);
    setSolution1(nice.length);
  };
  const part2 = () => {
    const nice = data
      .split("\n")
      .filter((line) => {
        const chars = line.split("");
        return chars.find((c, i) => chars[i + 2] === c);
      })
      .filter(
        (line) =>
          line.split("").filter((c, i) => {
            return line.split(c + line[i + 1]).length > 2;
          }).length > 0
      );

    setSolution2(nice.length);
  };

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);
  return (
    <div>
      <h2>--- Day 3: Perfectly Spherical Houses in a Vacuum ---</h2>
      <div>
        <button onClick={part1}>[Solve part 1]</button>
        {solution1}
      </div>
      <div>
        <button onClick={part2}>[Solve part 2]</button>
      </div>
      {solution2}
    </div>
  );
};

export default Solution;
