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
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;
    </Day>
  );
};

export default Link;
