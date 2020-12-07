import md5 from "md5";
import { useState } from "react";
interface Props {}

const Solution = (props: Props) => {
  const data = "yzbqklnj";

  const [solution1, setSolution1] = useState<number>();

  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    let count = 0;
    while (true) {
      const hash = md5(`${data}${count}`);
      if (hash.startsWith("00000")) {
        break;
      }
      count++;
    }
    setSolution1(count);
  };
  const part2 = async () => {
    let count = 0;
    while (true) {
      const hash = md5(`${data}${count}`);
      if (hash.startsWith("000000")) {
        break;
      }
      count++;
    }
    setSolution2(count);
  };

  return (
    <div>
      <h2>--- Day 4: The Ideal Stocking Stuffer ---</h2>
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
