import React from "react";
import Day from "../../components/Day";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
  day: number;
}

const Link = ({ complete, veryComplete, day }: Props) => {
  return (
    <Day day={day} complete={complete} veryComplete={veryComplete}>
      {`    |:::::::::::|//|     / / /   /_/_/_/#/#/#/     `}
    </Day>
  );
};

export default Link;
