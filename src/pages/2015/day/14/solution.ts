import { lines } from "../../../../utils/helpers";

type Deer = {
  speed: number;
  time: number;
  rest: number;
  dist: number;
  points: number;
};

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

function getDeers(input: string) {
  const deers: {
    [key: string]: Deer;
  } = {};
  lines(input).forEach((line) => {
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

export const part1 = (input: string): number => {
  const deers = getDeers(input);
  for (let i = 0; i <= 2503; i++) {
    fly(deers, i);
  }
  return getWinner(deers);
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

export const part2 = (input: string): number => {
  const deers = getDeers(input);
  for (let i = 0; i <= 2503; i++) {
    fly(deers, i);
    const winningDist = getWinner(deers);
    Object.keys(deers).forEach((deer) => {
      if (winningDist === deers[deer].dist) {
        deers[deer].points++;
      }
    });
  }
  return getWinnerPoints(deers);
};
