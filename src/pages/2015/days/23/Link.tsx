import React from "react";
import Day from "../../../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
  day: number;
}

const Link = ({ complete, veryComplete, day }: Props) => {
  return (
    <Day day={day} complete={complete} veryComplete={veryComplete}>
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;
    </Day>
  );
};

export default Link;
