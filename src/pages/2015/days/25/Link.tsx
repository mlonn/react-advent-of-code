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
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
    </Day>
  );
};

export default Link;
