import { lines } from "../../../../utils/helpers";

const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;
const WIN = 6;
const DRAW = 3;
const opponentPlays: { [key: string]: number } = {
  A: ROCK,
  B: PAPER,
  C: SCISSOR,
};
const iPlay: { [key: string]: number } = {
  X: ROCK,
  Y: PAPER,
  Z: SCISSOR,
};

const play = (opponent: number, me: number) => {
  if (opponent === me) {
    return me + DRAW;
  }
  switch (me) {
    case ROCK:
      if (opponent === SCISSOR) {
        return me + WIN;
      }
      return me;
    case PAPER:
      if (opponent === ROCK) {
        return me + WIN;
      }
      return me;
    case SCISSOR:
      if (opponent === PAPER) {
        return me + WIN;
      }
      return me;
  }
  return 0;
};

const getMove = (opponent: number, me: string): number => {
  switch (me) {
    case "X":
      switch (opponent) {
        case ROCK:
          return SCISSOR;
        case PAPER:
          return ROCK;
        case SCISSOR:
          return PAPER;
      }
      break;
    case "Y":
      return opponent;
    case "Z":
      switch (opponent) {
        case ROCK:
          return PAPER;
        case PAPER:
          return SCISSOR;
        case SCISSOR:
          return ROCK;
      }
  }
  return 0;
};

export const part1 = (input: string) => {
  let score = 0;
  lines(input).forEach((line) => {
    const [opponentInstruction, myInstruction] = line.split(" ");
    score += play(opponentPlays[opponentInstruction], iPlay[myInstruction]);
  });
  return score;
};
export const part2 = (input: string) => {
  let score = 0;
  lines(input).forEach((line) => {
    const [opponentInstruction, myInstruction] = line.split(" ");
    const move = getMove(opponentPlays[opponentInstruction], myInstruction);
    score += play(opponentPlays[opponentInstruction], move);
  });
  return score;
};
