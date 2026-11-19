import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Solver } from "../types";
import { eventByYear } from "../years";

const solutions = import.meta.glob<{ part1: Solver; part2: Solver }>("../pages/*/day/*/solution.ts");
const inputs = import.meta.glob<string>("../pages/*/day/*/input.ts", { import: "default" });

const Solution = () => {
  const [solution1, setSolution1] = useState<number | string>();
  const [solution2, setSolution2] = useState<number | string>();
  const { day = "", year = "" } = useParams();
  const [part1, setPart1] = useState<Solver>();
  const [part2, setPart2] = useState<Solver>();
  const [input, setInput] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    const getParts = async () => {
      const loadSolution = solutions[`../pages/${year}/day/${day}/solution.ts`];
      const loadInput = inputs[`../pages/${year}/day/${day}/input.ts`];
      if (!loadSolution || !loadInput) {
        return;
      }
      const [{ part1, part2 }, input] = await Promise.all([loadSolution(), loadInput()]);
      setPart1(() => part1);
      setPart2(() => part2);
      setInput(input);
    };
    getParts();
  }, [day, year]);

  if (isNaN(+day) || +day < 1 || +day > (eventByYear(year)?.days ?? 25)) {
    return <Navigate to="/" replace />;
  }
  if (!(input !== undefined && part1 && part2)) {
    return (
      <div>
        <p>Not yet solved</p>
        <button onClick={() => navigate(-1)}>[Go back]</button>
      </div>
    );
  }
  return (
    <div>
      <h2>--- {`Day ${day}`} ---</h2>
      <div>
        <button onClick={() => setSolution1(part1(input))}>[Solve part 1]</button>
        {solution1}
      </div>
      <div>
        <button onClick={() => setSolution2(part2(input))}>[Solve part 2]</button>
        {solution2}
      </div>
    </div>
  );
};

export default Solution;
