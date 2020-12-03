import React, { Suspense } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import status from "../status";
interface Props {}
const Solution = (props: Props) => {
  let { day } = useParams<{ day: string }>();
  const { goBack } = useHistory();
  const dayNumber = parseInt(day);
  console.log(dayNumber);
  if (isNaN(dayNumber) || dayNumber > 25) {
    return <Redirect to="/"></Redirect>;
  }
  if (!status[dayNumber]?.complete) {
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
