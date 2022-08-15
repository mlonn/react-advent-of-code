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
    line = line.replace(".", "");
    if (line.includes("gain")) {
      const [a, rest] = line.split(" would gain ");
      const [units, b] = rest.split(" happiness units by sitting next to ");
      addDist(a, b, units);
    } else {
      const [a, rest] = line.split(" would lose ");
      const [units, b] = rest.split(" happiness units by sitting next to ");
      addDist(a, b, "-" + units);
    }
  });
  return graph;
}

const getBestScore = (graph: any) =>
  permute(Object.keys(graph)).reduce((longest, path) => {
    let sum = 0;
    for (let i = 0; i < path.length; i++) {
      const me = path[i];
      const right = path[(i + 1) % path.length];
      const left = path[(i - 1 + path.length) % path.length];
      sum += graph[me][right];
      sum += graph[me][left];
    }
    if (sum > longest) {
      return sum;
    } else {
      return longest;
    }
  }, 0);

export const part1 = (input: string): number => {
  const graph = getGraph(input);
  return getBestScore(graph);
};
export const part2 = (input: string): number => {
  const graph = getGraph(input);
  graph.me = {};
  Object.keys(graph).forEach((key) => {
    graph[key].me = 0;
    graph.me[key] = 0;
  });
  return getBestScore(graph);
};
