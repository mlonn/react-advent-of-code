import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const Link = ({ complete, veryComplete }: Props) => {
  return (
    <Day year="2015" day="11" complete={complete}>
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;&lt;&lt;&lt;
    </Day>
  );
};

export default Link;
