import { useEffect, useState } from "react";
import input from "./input.txt";
import { getNeighbours, grid, lines, numbers } from "../../../../utils/helpers";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    const rules: { input: string; output: string }[] = [];
    let mol: string = "";
    lines(data).forEach((line) => {
      if (line.includes("\n")) {
        return;
      } else if (line.includes("=>")) {
        const [input, output] = line.split(" => ");
        rules.push({ input, output });
      } else {
        mol = line;
      }
    });
    const distict = new Set();
    for (const rule of rules) {
      const re = new RegExp(rule.input, "g");
      let match;
      while ((match = re.exec(mol)) != null) {
        const replaced =
          mol.substring(0, match.index) +
          rule.output +
          mol.substring(match.index + rule.input.length);
        distict.add(replaced);
      }
    }
    setSolution1(distict.size);
  };
  const part2 = () => {};

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);

  return (
    <div>
      <h2>--- Day 19: Medicine for Rudolph ---</h2>
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
