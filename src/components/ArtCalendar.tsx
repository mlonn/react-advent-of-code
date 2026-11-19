import React from "react";
import { Link, useParams } from "react-router";
import styled from "styled-components";
import { Status } from "../types";
import Calendar from "./Calendar";
import Star from "./Star";

/** A run of calendar text, optionally tagged with a palette key (the suffix of AoC's `calendar-color-*` class). */
export type Segment = string | [text: string, color: string];

/** One line of a calendar. Lines with a `day` render as that day's link; the rest are static decoration. */
export interface CalendarRow {
  day?: number;
  segments: Segment[];
}

/**
 * `transform` (e.g. a rotation) is for the odd piece of art that AoC draws with CSS rather than plain text.
 * `final` colours are extrapolated guesses that only show once every day has both stars.
 * `always` colours show whatever the status; `hidden` text is blank until its colour is revealed.
 */
export type Palette = Record<string, { color: string; glow?: string; transform?: string; final?: boolean; always?: boolean; hidden?: boolean }>;

const DayLink = styled(Link)`
  color: #666666;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #666666;
    background-color: rgba(119, 119, 165, 0.2);
    cursor: pointer;
  }
`;

const StaticLine = styled.span`
  color: #cccccc;
`;

const DayLabel = styled.span`
  color: #cccccc;
  text-align: end;
`;

const Art = ({ segments, palette, colored, allSolved }: { segments: Segment[]; palette: Palette; colored: boolean; allSolved: boolean }) => (
  <>
    {segments.map((segment, i) => {
      if (typeof segment === "string") {
        return <React.Fragment key={i}>{segment}</React.Fragment>;
      }
      const [text, key] = segment;
      const style = palette[key];
      if (!style) {
        return <React.Fragment key={i}>{text}</React.Fragment>;
      }
      if (!style.always && (!colored || (style.final && !allSolved))) {
        return <React.Fragment key={i}>{style.hidden ? " ".repeat([...text].length) : text}</React.Fragment>;
      }
      return (
        <span key={i} style={{ color: style.color, textShadow: style.glow, ...(style.transform && { display: "inline-block", transform: style.transform }) }}>
          {text}
        </span>
      );
    })}
  </>
);

interface Props {
  rows: CalendarRow[];
  palette: Palette;
  status: Status;
  /**
   * Which star count reveals a day's colours. AoC 2024 only colours a day's art once both stars are earned;
   * "always" shows the colours exactly as imported, for years like 2020 where colour follows map regions, not rows.
   */
  colorOn?: "complete" | "veryComplete" | "always";
  /** Hide a day's art entirely (not just its colours) until it is revealed, like AoC 2018. */
  hideUnrevealed?: boolean;
}

const textLength = (segments: Segment[]) => segments.reduce((n, s) => n + [...(typeof s === "string" ? s : s[0])].length, 0);

const ArtCalendar = ({ rows, palette, status, colorOn = "veryComplete", hideUnrevealed = false }: Props) => {
  const { year } = useParams();
  const allSolved = rows.every(({ day }) => day === undefined || !!status[day]?.veryComplete);
  return (
    <Calendar>
      {rows.map(({ day, segments }, i) => {
        if (day === undefined) {
          return (
            <React.Fragment key={`line-${i}`}>
              <StaticLine>
                <Art segments={segments} palette={palette} colored allSolved={allSolved} />
              </StaticLine>
              <span />
              <span />
            </React.Fragment>
          );
        }
        const dayStatus = status[day];
        const revealed = colorOn === "always" || !!dayStatus?.[colorOn];
        return (
          <React.Fragment key={`day-${day}`}>
            <DayLink to={`/${year}/day/${day}`}>{hideUnrevealed && !revealed ? " ".repeat(textLength(segments)) : <Art segments={segments} palette={palette} colored={revealed} allSolved={allSolved} />}</DayLink>
            <DayLabel>{day}</DayLabel>
            <div>
              <Star complete={!!dayStatus?.complete} />
              <Star complete={!!dayStatus?.veryComplete} />
            </div>
          </React.Fragment>
        );
      })}
    </Calendar>
  );
};

export default ArtCalendar;
