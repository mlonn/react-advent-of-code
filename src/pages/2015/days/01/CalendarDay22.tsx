import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const CalandarDay22 = ({ complete, veryComplete }: Props) => {
  return (
    <Day complete={complete}>
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;&lt;
    </Day>
  );
};

export default CalandarDay22;
