import { lines, permute } from "../../../../utils/helpers";

function getGraph(input: string) {
  const graph: any = {};
  function addDist(a: string, b: string, dist: string) {
    if (graph[a]) {
      graph[a][b] = +dist;
    } else {
      graph[a] = { [b]: +dist };
    }
  }

  lines(input).forEach((line) => {
    const [a, rest] = line.split(" to ");
    const [b, dist] = rest.split(" = ");
    addDist(a, b, dist);
    addDist(b, a, dist);
  });
  return graph;
}

export const part1 = (input: string): number => {
  const graph = getGraph(input);
  const shortest = permute(Object.keys(graph)).reduce((shortest, path) => {
    let sum = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const fromCity = path[i];
      const toCity = path[i + 1];
      sum += graph[fromCity][toCity];
    }
    if (sum < shortest) {
      return sum;
    } else {
      return shortest;
    }
  }, Infinity);
  return shortest;
};
export const part2 = (input: string): number => {
  const graph = getGraph(input);

  const longest = permute(Object.keys(graph)).reduce((longest, path) => {
    let sum = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const fromCity = path[i];
      const toCity = path[i + 1];
      sum += graph[fromCity][toCity];
    }
    if (sum > longest) {
      return sum;
    } else {
      return longest;
    }
  }, 0);

  return longest;
};
