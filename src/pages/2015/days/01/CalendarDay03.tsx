import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const CalandarDay03 = ({ complete, veryComplete }: Props) => {
  return (
    <Day complete={complete}>
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"o"} />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"*"} />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"o"} />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"o"} />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"*"} />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"O"} />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"*"} />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"o"} />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"*"} />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"*"} />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"o"} />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"@"} />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"@"} />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type={"O"} />
      &lt;&lt;
    </Day>
  );
};

export default CalandarDay03;
