import { useEffect, useState } from "react";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("1113222113");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  const looksay = (input: string): string => {
    let output = "";
    let count = 1;
    let currentChar = input[0];
    for (let i = 1; i < input.length; i++) {
      const char = input[i];
      if (currentChar === char) {
        count++;
      } else {
        output += count + input[i - 1];
        currentChar = char;
        count = 1;
      }
    }
    output += count + input[input.length - 1];
    return output;
  };

  const part1 = () => {
    let current = data;
    for (let i = 0; i < 40; i++) {
      current = looksay(current);
    }
    setSolution1(current.length);
  };
  const part2 = () => {
    let current = data;
    for (let i = 0; i < 50; i++) {
      current = looksay(current);
    }
    setSolution2(current.length);
  };

  return (
    <div>
      <h2>--- Day 10: Elves Look, Elves Say ---</h2>
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
