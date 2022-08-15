import { useEffect, useState } from "react";
import input from "./input.txt";
import { lines, permute } from "../../../../utils/helpers";

interface Props {}

const Solution = (props: Props) => {
  const [data, setData] = useState<string>("");

  const [solution1, setSolution1] = useState<number>();
  const [solution2, setSolution2] = useState<number>();
  function getGraph() {
    const graph: any = {};

    function addDist(a: string, b: string, dist: string) {
      if (graph[a]) {
        graph[a][b] = +dist;
      } else {
        graph[a] = { [b]: +dist };
      }
    }

    lines(data).forEach((line) => {
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

  const part1 = () => {
    const graph = getGraph();
    const highest = getBestScore(graph);
    setSolution1(highest);
  };
  const part2 = () => {
    const graph = getGraph();
    graph.me = {};
    Object.keys(graph).forEach((key) => {
      graph[key].me = 0;
      graph.me[key] = 0;
    });
    const highest = getBestScore(graph);
    setSolution2(highest);
  };

  useEffect(() => {
    fetch(input)
      .then((r) => r.text())
      .then((t) => setData(t || ""));
  }, []);
  return (
    <div>
      <h2>--- Day 13: Knights of the Dinner Table ---</h2>
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
