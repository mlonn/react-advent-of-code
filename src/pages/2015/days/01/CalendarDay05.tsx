import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const CalandarDay05 = ({ complete, veryComplete }: Props) => {
  return (
    <Day complete={complete}>
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;&lt;
    </Day>
  );
};

export default CalandarDay05;
