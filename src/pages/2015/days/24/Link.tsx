import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const Link = ({ complete, veryComplete }: Props) => {
  return (
    <Day year="2015" day="24" complete={complete}>
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &lt;
    </Day>
  );
};

export default Link;
