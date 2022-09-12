import React from "react";
import Day from "../../components/Day";
import Window from "../../components/Window";

interface Props {
  complete?: boolean;
  veryComplete?: boolean;
  day: number;
}

const Link = ({ complete, veryComplete, day }: Props) => {
  return (
    <Day day={day} complete={complete} veryComplete={veryComplete}>
      {" || |::"}
      <Window color={"red"}>{`:`}</Window>
      {":"}
      <Window color={"red"}>{`:`}</Window>
      {":"}
      <Window color={"green"}>{`:`}</Window>
      {":"}
      <Window color={"green"}>{`:`}</Window>
      {"::|   | //|  || /   /  ||      ||    "}
    </Day>
  );
};

export default Link;
