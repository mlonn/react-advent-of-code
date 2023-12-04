import { lines } from "../../../../utils/helpers";

function parseGames(input: string) {
  return lines(input).map((line) => {
    const match = line.match(/Game (\d+): (.*)/);
    if (match) {
      const [, id, games] = match;
      return {
        id,
        games: games.split(";").map((round) =>
          round.split(",").map((q) => {
            const v = q.trim().split(" ");
            return { color: v[1], value: +v[0] };
          })
        ),
      };
    }
    return { id: "", games: [] };
  });
}

export const part1 = (input: string) => {
  const rules: { [key: string]: number } = {
    red: 12,
    green: 13,
    blue: 14,
  };
  return parseGames(input)
    .filter((g) => {
      return g.games.every((round) => {
        return round.every((q) => {
          return q.value <= rules[q.color];
        });
      });
    })
    .reduce((acc, g) => acc + +g.id, 0);
};
export const part2 = (input: string) => {
  return parseGames(input).reduce((acc, g) => {
    const gg: any = g.games.reduce((maxGame: any, rounds) => {
      rounds.forEach((round) => {
        maxGame[round.color] = maxGame[round.color] ? Math.max(maxGame[round.color], round.value) : round.value;
      });
      return maxGame;
    }, {});
    return acc + gg.green * gg.blue * gg.red;
  }, 0);
};
