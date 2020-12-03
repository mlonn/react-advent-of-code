import React from "react";
import Day from "../../components/Day";
import Ornament from "../../components/Ornament";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
}

const Link = ({ complete, veryComplete }: Props) => {
  return (
    <Day year="2015" day="4" complete={complete}>
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="O" />
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &gt;&gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="*" />
      &gt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;&lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;&lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="o" />
      &lt;
      <Ornament complete={complete} veryComplete={veryComplete} type="@" />
      &lt;
    </Day>
  );
};

export default Link;
