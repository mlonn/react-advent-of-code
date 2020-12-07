import { useEffect, useState } from "react";
import input from "./input.txt";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();

  const [solution2, setSolution2] = useState<number>();

  const part1 = () => {
    const houses: any = {};
    let sx = 0;
    let sy = 0;
    houses[`0:0`] = 1;
    data.split("").forEach((instruction) => {
      switch (instruction) {
        case "^":
          sy -= 1;
          break;
        case "v":
          sy += 1;
          break;
        case ">":
          sx += 1;
          break;
        case "<":
          sx -= 1;
          break;
      }
      const house = houses[`${sx}:${sy}`];
      houses[`${sx}:${sy}`] = house ? house + 1 : 1;
    });
    console.log(houses);
    setSolution1(Object.keys(houses).length);
  };
  const part2 = () => {
    const houses: any = {};
    let sx = 0;
    let sy = 0;
    let rx = 0;
    let ry = 0;
    houses[`0:0`] = 2;
    data.split("").forEach((instruction, index) => {
      const isRobot = index % 2 === 0;

      switch (instruction) {
        case "^":
          isRobot ? (ry -= 1) : (sy -= 1);
          break;
        case "v":
          isRobot ? (ry += 1) : (sy += 1);
          break;
        case ">":
          isRobot ? (rx += 1) : (sx += 1);
          break;
        case "<":
          isRobot ? (rx -= 1) : (sx -= 1);
          break;
      }
      const santaHouse = houses[`${sx}:${sy}`];
      const robotHouse = houses[`${rx}:${ry}`];
      houses[`${sx}:${sy}`] = santaHouse ? santaHouse + 1 : 1;
      houses[`${rx}:${ry}`] = robotHouse ? robotHouse + 1 : 1;
    });

    setSolution2(Object.keys(houses).length);
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
