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
    <Day day={day} complete={complete}>
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;&lt;
    </Day>
  );
};

export default Link;
