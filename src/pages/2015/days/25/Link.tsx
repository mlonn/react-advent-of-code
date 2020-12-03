import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const Link = ({ complete, veryComplete }: Props) => {
  return (
    <Day year="2015" day="25" complete={complete}>
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
    </Day>
  );
};

export default Link;
