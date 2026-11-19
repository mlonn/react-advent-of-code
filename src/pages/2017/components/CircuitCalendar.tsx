import React, { useMemo, useState } from "react";
import { Link } from "react-router";
import styled, { css, keyframes } from "styled-components";
import Calendar from "../../../components/Calendar";
import Star from "../../../components/Star";
import { Status } from "../../../types";
import { Board, dayOfRow, generateBoard, lightBoard, WIDTH } from "../circuit";

/** Seconds between neighbouring cells lighting up. */
const DELAY_PER_CELL = 0.012;

const reveal = keyframes`
  0% { opacity: 0.2; filter: grayscale(100%) brightness(100%); }
  10% { opacity: 1; filter: grayscale(100%) brightness(1000%); }
  100% { opacity: 1; filter: grayscale(0%) brightness(100%); }
`;

const revealStar = keyframes`
  0% { opacity: 0.2; text-shadow: 0 0 0 #ffff66; }
  10% { opacity: 1; text-shadow: 0 0 5px #ffffff, 0 0 10px #ffff66, 0 0 20px #ffff66; }
  100% { opacity: 1; text-shadow: 0 0 5px #ffff66; }
`;

const rowStyles = css`
  i {
    font-style: normal;
    display: inline-block;
    width: 0.6em;
    text-align: center;
  }
  .edge {
    color: #cccccc;
  }
  .off {
    opacity: 0.2;
  }
  .on {
    animation: ${reveal} 1s both;
  }
  .star {
    color: #666666;
  }
  .star.on {
    color: #ffff66;
    animation-name: ${revealStar};
  }
  .c0 {
    color: #ff9900;
  }
  .c1 {
    color: #0066ff;
  }
  .c2 {
    color: #aaaaaa;
  }
  .c3 {
    color: #ff0000;
  }
  .c4 {
    color: #009900;
  }
  .c5 {
    color: #990099;
  }
`;

const Row = styled.span`
  ${rowStyles}
`;

const DayRow = styled(Link)`
  ${rowStyles}
  color: #666666;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #666666;
    background-color: rgba(119, 119, 165, 0.2);
    cursor: pointer;
  }
`;

const DayLabel = styled.span`
  color: #cccccc;
  text-align: end;
`;

const Edge = ({ text }: { text: string }) => (
  <>
    {[...text].map((ch, i) => (
      <i key={i} className="edge">
        {ch}
      </i>
    ))}
  </>
);

const BoardRow = ({ board, dist, y }: { board: Board; dist: number[][]; y: number }) => (
  <>
    <Edge text="|" />
    <i> </i>
    {board.cells[y].map((cell, x) => {
      const d = dist[y][x];
      const classes = [d === -1 ? "off" : "on", cell.kind === "star" && "star", cell.component !== undefined && `c${cell.component}`].filter(Boolean).join(" ");
      return (
        <i key={x} className={classes} style={d === -1 ? undefined : { animationDelay: `${(d * DELAY_PER_CELL).toFixed(3)}s` }}>
          {cell.ch}
        </i>
      );
    })}
    <i> </i>
    <Edge text="|" />
  </>
);

interface Props {
  status: Status;
}

/** A fresh circuit board on every visit; completed days power up the traces around their stars. */
const CircuitCalendar = ({ status }: Props) => {
  const [board] = useState(() => generateBoard());
  const dist = useMemo(() => lightBoard(board, (day) => !!status[day]?.veryComplete), [board, status]);
  const horizontal = "-".repeat(WIDTH + 2);

  return (
    <Calendar>
      <Row>
        <Edge text={`.${horizontal}.`} />
      </Row>
      <span />
      <span />
      {board.cells.map((_, y) => {
        const day = dayOfRow(y);
        return (
          <React.Fragment key={day}>
            <DayRow to={`/2017/day/${day}`}>
              <BoardRow board={board} dist={dist} y={y} />
            </DayRow>
            <DayLabel>{day}</DayLabel>
            <div>
              <Star complete={!!status[day]?.complete} />
              <Star complete={!!status[day]?.veryComplete} />
            </div>
          </React.Fragment>
        );
      })}
      <Row>
        <Edge text={`'${horizontal}'`} />
      </Row>
      <span />
      <span />
    </Calendar>
  );
};

export default CircuitCalendar;
