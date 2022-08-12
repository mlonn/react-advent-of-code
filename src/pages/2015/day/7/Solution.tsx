import { useEffect, useState } from "react";
import input from "./input.txt";
import { lines } from "../../../../utils/helpers";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();
  const uint16 = (n: number) => {
    return n & 0xffff;
  };

  const getValue = (input: string, outputs: { [key: string]: number }) => {
    if (isNaN(+input)) {
      return outputs[input];
    }
    return +input;
  };
  const part1 = (outputs: { [key: string]: number } = {}) => {
    for (let index = 0; index < 10000; index++) {
      if (outputs["a"]) {
        break;
      }
      lines(data).forEach((line) => {
        const [i, o] = line.split(" -> ");
        if (outputs[o]) {
          return;
        }
        if (i.includes("AND")) {
          const [x, y] = i.split(" AND ");
          const xval = getValue(x, outputs);
          const yval = getValue(y, outputs);
          if (!isNaN(xval) && !isNaN(yval)) {
            outputs[o] = uint16(xval & yval);
          }
        } else if (i.includes("OR")) {
          const [x, y] = i.split(" OR ");
          const xval = getValue(x, outputs);
          const yval = getValue(y, outputs);
          if (!isNaN(xval) && !isNaN(yval)) {
            outputs[o] = uint16(xval | yval);
          }
        } else if (i.includes("LSHIFT")) {
          const [x, y] = i.split(" LSHIFT ");
          const xval = getValue(x, outputs);
          const yval = getValue(y, outputs);
          if (!isNaN(xval) && !isNaN(yval)) {
            outputs[o] = uint16(xval << yval);
          }
        } else if (i.includes("RSHIFT")) {
          const [x, y] = i.split(" RSHIFT ");
          const xval = getValue(x, outputs);
          const yval = getValue(y, outputs);
          if (!isNaN(xval) && !isNaN(yval)) {
            outputs[o] = uint16(xval >> yval);
          }
        } else if (i.includes("NOT")) {
          const [, x] = i.split("NOT ");
          const xval = getValue(x, outputs);
          if (!isNaN(xval)) {
            outputs[o] = uint16(~xval);
          }
        } else if (!isNaN(outputs[i])) {
          outputs[o] = outputs[i];
        } else if (!isNaN(+i)) {
          outputs[o] = +i;
        }
      });
    }
    return outputs.a;
  };
  const part2 = () => {
    const a = part1();
    setSolution2(part1({ b: a }));
  };

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);
  return (
    <div>
      <h2>--- Day 7: Some Assembly Required ---</h2>
      <div>
        <button onClick={() => setSolution1(part1())}>[Solve part 1]</button>
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
