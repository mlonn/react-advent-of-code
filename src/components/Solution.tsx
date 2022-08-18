import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { Solver } from "../types";

const Solution = () => {
  const [solution1, setSolution1] = useState<number | string>();
  const [solution2, setSolution2] = useState<number | string>();
  let { day, year } = useParams<{ day: string; year: string }>();
  const [part1, setPart1] = useState<Solver>();
  const [part2, setPart2] = useState<Solver>();
  const [input, setInput] = useState<string>();
  const { goBack } = useHistory();

  useEffect(() => {
    const getParts = async () => {
      const { part1, part2 } = await import(
        `../pages/${year}/day/${day}/solution`
      );
      const input = await import(`../pages/${year}/day/${day}/input`);
      setPart1(() => part1);
      setPart2(() => part2);
      setInput(input.default);
    };
    getParts();
  }, []);

  if (isNaN(+day) || +day > 25) {
    return <Redirect to="/"></Redirect>;
  }
  if (!(input !== undefined && part1 && part2)) {
    return (
      <div>
        <p>Not yet solved</p>
        <button onClick={goBack}>[Go back]</button>
      </div>
    );
  }
  return (
    <div>
      <h2>--- {`Day ${day}`} ---</h2>
      <div>
        <button onClick={() => setSolution1(part1(input))}>
          [Solve part 1]
        </button>
        {solution1}
      </div>
      <div>
        <button onClick={() => setSolution2(part2(input))}>
          [Solve part 2]
        </button>
        {solution2}
      </div>
    </div>
  );
};

export default Solution;
