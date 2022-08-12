import { useEffect, useState } from "react";
import input from "./input.txt";
import { lines } from "../../../../utils/helpers";

interface Props {}

type Deer = {
  speed: number;
  time: number;
  rest: number;
  dist: number;
  points: number;
};
const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();

  function getWinner(deers: { [p: string]: Deer }) {
    return Object.values(deers).reduce((curr, acc) => {
      if (acc.dist > curr) {
        return acc.dist;
      }
      return curr;
    }, 0);
  }

  function getWinnerPoints(deers: { [p: string]: Deer }) {
    return Object.values(deers).reduce((curr, acc) => {
      if (acc.points > curr) {
        return acc.points;
      }
      return curr;
    }, 0);
  }

  function getDeers() {
    const deers: {
      [key: string]: Deer;
    } = {};
    lines(data).forEach((line) => {
      const match = line.match(
        /(.*) can fly (.*) km\/s for (.*) seconds, but then must rest for (.*) seconds\./
      );
      if (match) {
        const [, deer, speed, time, rest] = match;
        deers[deer] = {
          speed: +speed,
          time: +time,
          rest: +rest,
          dist: 0,
          points: 0,
        };
      }
    });
    return deers;
  }

  const part1 = () => {
    const deers = getDeers();
    for (let i = 0; i <= 2503; i++) {
      fly(deers, i);
    }
    setSolution1(getWinner(deers));
  };

  function fly(deers: { [p: string]: Deer }, i: number) {
    Object.keys(deers).forEach((deer) => {
      const { speed, rest, time } = deers[deer];
      const flying = i % (time + rest) < time;
      if (flying) {
        deers[deer].dist += speed;
      }
    });
  }

  const part2 = () => {
    const deers = getDeers();
    for (let i = 0; i <= 2503; i++) {
      fly(deers, i);
      const winningDist = getWinner(deers);
      Object.keys(deers).forEach((deer) => {
        if (winningDist === deers[deer].dist) {
          deers[deer].points++;
        }
      });
    }
    setSolution2(getWinnerPoints(deers));
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
