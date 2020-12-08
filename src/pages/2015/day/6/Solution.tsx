import { useEffect, useState } from "react";
import input from "./input.txt";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    const lights: any = {};
    data.split("\n").forEach((line) => {
      let current = line;
      if (line.startsWith("turn ")) {
        current = line.slice(5);
      }
      const [first, br] = current.split(" through ");
      const [action, tl] = first.split(" ");
      const [x1, y1] = tl.split(",").map((x) => parseInt(x));
      const [x2, y2] = br.split(",").map((x) => parseInt(x));
      for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
          switch (action) {
            case "on":
              lights[`${x},${y}`] = true;
              break;
            case "off":
              lights[`${x},${y}`] = false;
              break;
            case "toggle":
              lights[`${x},${y}`] = !lights[`${x},${y}`];
              break;
            default:
              break;
          }
        }
      }
    });
    setSolution1(Object.values(lights).filter((value) => value).length);
  };
  const part2 = () => {
    const lights: { [key: string]: number } = {};
    data.split("\n").forEach((line) => {
      let current = line;
      if (line.startsWith("turn ")) {
        current = line.slice(5);
      }
      const [first, br] = current.split(" through ");
      const [action, tl] = first.split(" ");
      const [x1, y1] = tl.split(",").map((x) => parseInt(x));
      const [x2, y2] = br.split(",").map((x) => parseInt(x));

      for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
          let brightness = lights[`${x},${y}`];
          switch (action) {
            case "on":
              brightness = brightness ? (brightness += 1) : 1;
              break;
            case "off":
              brightness = brightness
                ? (brightness = Math.max((brightness -= 1), 0))
                : 0;
              break;
            case "toggle":
              brightness = brightness ? (brightness += 2) : 2;
              break;
            default:
              break;
          }
          lights[`${x},${y}`] = brightness;
        }
      }
    });
    setSolution2(Object.values(lights).reduce((acc, curr) => acc + curr, 0));
  };

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
