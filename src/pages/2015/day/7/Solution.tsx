import { useEffect, useState } from "react";
import input from "./input.txt";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();
  const uint16 = (n: number) => {
    return n & 0xffff;
  };

  const part1 = () => {
    const outputs: { [key: string]: number } = {};
    const lines = data.split("\n");
    for (let index = 0; index < 10000; index++) {
      lines.forEach((line) => {
        const [i, o] = line.split(" -> ");
        const number = parseInt(i);
        if (!isNaN(number)) {
          outputs[o] = number;
        } else if (i.includes("AND")) {
          const [x, y] = i.split(" AND ");
          const xval = isNaN(parseInt(x)) ? outputs[x] : parseInt(x);
          const yval = isNaN(parseInt(y)) ? outputs[y] : parseInt(y);
          if (xval && yval) outputs[o] = uint16(xval & yval);
        } else if (i.includes("OR")) {
          const [x, y] = i.split(" OR ");
          const xval = isNaN(parseInt(x)) ? outputs[x] : parseInt(x);
          const yval = isNaN(parseInt(y)) ? outputs[y] : parseInt(y);
          if (xval && yval) outputs[o] = uint16(xval | yval);
        } else if (i.includes("LSHIFT")) {
          const [x, y] = i.split(" LSHIFT ");
          if (outputs[x]) outputs[o] = uint16(outputs[x] << parseInt(y));
        } else if (i.includes("RSHIFT")) {
          const [x, y] = i.split(" RSHIFT ");
          const xval = isNaN(parseInt(x)) ? outputs[x] : parseInt(x);
          const yval = isNaN(parseInt(y)) ? outputs[y] : parseInt(y);
          if (xval && yval) outputs[o] = uint16(xval >> yval);
        } else if (i.includes("NOT")) {
          const [, x] = i.split("NOT ");
          const xval = isNaN(parseInt(x)) ? outputs[x] : parseInt(x);
          if (xval) outputs[o] = uint16(~xval);
        } else if (outputs[i]) {
          console.log("hej");
          outputs[o] = outputs[i];
        }
      });
    }

    setSolution1(outputs.lw);
  };
  const part2 = () => {};

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);
  return (
    <div>
      <h2>--- Day 6: Probably a Fire Hazard ---</h2>
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
