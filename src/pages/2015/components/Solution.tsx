import React, { Suspense } from "react";
import { useHistory, useParams } from "react-router-dom";
import status from "../status";
interface Props {}
const Solution = (props: Props) => {
  let { day } = useParams<{ day: string }>();
  const { goBack } = useHistory();
  if (!status[parseInt(day, 10)]?.complete) {
    return (
      <div>
        <p>Not yet solved</p>
        <button onClick={goBack}>[Go back]</button>
      </div>
    );
  }
  const SolutionDay = React.lazy(() => import(`../days/${day}/Solution`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {SolutionDay && <SolutionDay />}
    </Suspense>
  );
};

export default Solution;
