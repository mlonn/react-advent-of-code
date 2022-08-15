import React, { Suspense, useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import DaySolution from "../../../components/Solution";
import { Solver } from "../../../types";
interface Props {}
const Solution = (props: Props) => {
  let { day } = useParams<{ day: string }>();
  const [part1, setPart1] = useState<Solver>();
  const [part2, setPart2] = useState<Solver>();
  const [input, setInput] = useState<string>();
  const { goBack } = useHistory();

  useEffect(() => {
    const getParts = async () => {
      const { part1, part2 } = await import(`../day/${day}/solution`);
      const input = await import(`../day/${day}/input`);
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
    <>
      <DaySolution
        title={`Day ${day}`}
        input={input}
        part1={part1}
        part2={part2}
      />
    </>
  );
};

export default Solution;
