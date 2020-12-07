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
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;&lt;&lt;
    </Day>
  );
};

export default Link;
