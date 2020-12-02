import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const CalandarDay23 = ({ complete, veryComplete }: Props) => {
  return (
    <Day complete={complete}>
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;
    </Day>
  );
};

export default CalandarDay23;
