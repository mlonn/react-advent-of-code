import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const CalandarDay25 = ({ complete, veryComplete }: Props) => {
  return (
    <Day complete={complete}>
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
    </Day>
  );
};

export default CalandarDay25;
