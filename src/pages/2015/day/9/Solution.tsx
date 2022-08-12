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
      const [a, rest] = line.split(" to ");
      const [b, dist] = rest.split(" = ");
      addDist(a, b, dist);
      addDist(b, a, dist);
    });
    return graph;
  }

  const part1 = () => {
    const graph = getGraph();
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
    setSolution1(shortest);
  };
  const part2 = () => {
    const graph = getGraph();

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

    setSolution2(longest);
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
