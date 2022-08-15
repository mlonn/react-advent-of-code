import { useEffect, useState } from "react";
import input from "./input.txt";
import { numbers } from "../../../../utils/helpers";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  function combinations(arr: number[]) {
    const fn = (active: number[], rest: number[], a: number[][]) => {
      if (active.length === 0 && rest.length === 0) return [];
      const sum = active.reduce((sum, size) => sum + size, 0);
      if (rest.length === 0) {
        if (sum === 150) {
          a.push(active);
        }
      } else if (sum <= 150) {
        fn([...active, rest[0]], rest.slice(1), a);
        fn(active, rest.slice(1), a);
      }
      return a;
    };
    return fn([], arr, []);
  }
  const part1 = () => {
    const buckets = numbers(data);
    setSolution1(combinations(buckets).length);
  };

  const part2 = () => {
    const buckets = numbers(data);
    const valid = combinations(buckets);
    const min = valid.reduce((min, v) => {
      if (v.length < min) {
        return v.length;
      }
      return min;
    }, Infinity);

    setSolution2(valid.filter((v) => v.length === min).length);
  };

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);

  return (
    <div>
      <h2>--- Day 17: No Such Thing as Too Much ---</h2>
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
