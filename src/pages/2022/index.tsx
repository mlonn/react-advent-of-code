import React, { Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Calendar from "../../components/Calendar";
import Solution from "../../components/Solution";
import status from "./status";
import Day from "./components/Day";
import Star from "../../components/Star";

const DayLabel = styled.span<{ disabled?: boolean }>`
  text-align: end;
  color: ${({ disabled }) => (disabled ? "#666" : "")};
`;
const AoC2021 = () => {
  let { path } = useRouteMatch();
  const thing = () => {
    let str = "";
    for (let i = 0; i < 49; i++) {
      str += Math.random() > 0.5 ? "#" : "@";
    }
    return str;
  };
  return (
    <Switch>
      <Route exact path={path}>
        <Suspense fallback={<div>Loading...</div>}>
          <Calendar>
            <Day disabled day={25}>
              {thing()}
            </Day>
            <DayLabel disabled>25</DayLabel>
            <div>
              <Star complete={status[25]?.complete} />
              <Star complete={status[25]?.veryComplete} />
            </div>
            <Day disabled day={24}>
              {thing()}
            </Day>
            <DayLabel disabled>24</DayLabel>
            <div>
              <Star complete={status[24]?.complete} />
              <Star complete={status[24]?.veryComplete} />
            </div>
            <Day disabled day={23}>
              {thing()}
            </Day>
            <DayLabel disabled>23</DayLabel>
            <div>
              <Star complete={status[23]?.complete} />
              <Star complete={status[23]?.veryComplete} />
            </div>
            <Day disabled day={22}>
              {thing()}
            </Day>
            <DayLabel disabled>22</DayLabel>
            <div>
              <Star complete={status[22]?.complete} />
              <Star complete={status[22]?.veryComplete} />
            </div>
            <Day disabled day={21}>
              {thing()}
            </Day>
            <DayLabel disabled>21</DayLabel>
            <div>
              <Star complete={status[21]?.complete} />
              <Star complete={status[21]?.veryComplete} />
            </div>
            <Day disabled day={20}>
              {thing()}
            </Day>
            <DayLabel disabled>20</DayLabel>
            <div>
              <Star complete={status[20]?.complete} />
              <Star complete={status[20]?.veryComplete} />
            </div>
            <Day disabled day={19}>
              {thing()}
            </Day>
            <DayLabel disabled>19</DayLabel>
            <div>
              <Star complete={status[19]?.complete} />
              <Star complete={status[19]?.veryComplete} />
            </div>
            <Day disabled day={18}>
              {thing()}
            </Day>
            <DayLabel disabled>18</DayLabel>
            <div>
              <Star complete={status[18]?.complete} />
              <Star complete={status[18]?.veryComplete} />
            </div>
            <Day disabled day={17}>
              {thing()}
            </Day>
            <DayLabel disabled>17</DayLabel>
            <div>
              <Star complete={status[17]?.complete} />
              <Star complete={status[17]?.veryComplete} />
            </div>
            <Day disabled day={16}>
              {thing()}
            </Day>
            <DayLabel disabled>16</DayLabel>
            <div>
              <Star complete={status[16]?.complete} />
              <Star complete={status[16]?.veryComplete} />
            </div>
            <Day disabled day={15}>
              {thing()}
            </Day>
            <DayLabel disabled>15</DayLabel>
            <div>
              <Star complete={status[15]?.complete} />
              <Star complete={status[15]?.veryComplete} />
            </div>
            <Day disabled day={14}>
              {thing()}
            </Day>
            <DayLabel disabled>14</DayLabel>
            <div>
              <Star complete={status[14]?.complete} />
              <Star complete={status[14]?.veryComplete} />
            </div>
            <Day disabled day={13}>
              {thing()}
            </Day>
            <DayLabel disabled>13</DayLabel>
            <div>
              <Star complete={status[13]?.complete} />
              <Star complete={status[13]?.veryComplete} />
            </div>
            <Day disabled day={12}>
              {thing()}
            </Day>
            <DayLabel disabled>12</DayLabel>
            <div>
              <Star complete={status[12]?.complete} />
              <Star complete={status[12]?.veryComplete} />
            </div>
            <Day disabled day={11}>
              {thing()}
            </Day>
            <DayLabel disabled>11</DayLabel>
            <div>
              <Star complete={status[11]?.complete} />
              <Star complete={status[11]?.veryComplete} />
            </div>
            <Day disabled day={10}>
              {thing()}
            </Day>
            <DayLabel disabled>10</DayLabel>
            <div>
              <Star complete={status[10]?.complete} />
              <Star complete={status[10]?.veryComplete} />
            </div>
            <Day disabled day={9}>
              {thing()}
            </Day>
            <DayLabel disabled>9</DayLabel>
            <div>
              <Star complete={status[9]?.complete} />
              <Star complete={status[9]?.veryComplete} />
            </div>
            <Day disabled day={8}>
              {thing()}
            </Day>
            <DayLabel disabled>8</DayLabel>
            <div>
              <Star complete={status[8]?.complete} />
              <Star complete={status[8]?.veryComplete} />
            </div>
            <Day disabled day={7}>
              {thing()}
            </Day>
            <DayLabel disabled>7</DayLabel>
            <div>
              <Star complete={status[7]?.complete} />
              <Star complete={status[7]?.veryComplete} />
            </div>
            <Day disabled day={6}>
              {thing()}
            </Day>
            <DayLabel disabled>6</DayLabel>
            <div>
              <Star complete={status[6]?.complete} />
              <Star complete={status[6]?.veryComplete} />
            </div>
            <Day disabled day={5}>
              {thing()}
            </Day>
            <DayLabel disabled>5</DayLabel>
            <div>
              <Star complete={status[5]?.complete} />
              <Star complete={status[5]?.veryComplete} />
            </div>
            <Day disabled day={4}>
              {thing()}
            </Day>
            <DayLabel disabled>4</DayLabel>
            <div>
              <Star complete={status[4]?.complete} />
              <Star complete={status[4]?.veryComplete} />
            </div>
            <Day disabled day={3}>
              {thing()}
            </Day>
            <DayLabel disabled>3</DayLabel>
            <div>
              <Star complete={status[3]?.complete} />
              <Star complete={status[3]?.veryComplete} />
            </div>
            <Day disabled day={2}>
              {thing()}
            </Day>
            <DayLabel disabled>2</DayLabel>
            <div>
              <Star complete={status[2]?.complete} />
              <Star complete={status[2]?.veryComplete} />
            </div>
            <Day day={1} complete>{`  ~    ~  ~      ~     ~ ~   ~     ~  ~  ~   ~   `}</Day>
            <DayLabel>1</DayLabel>
            <div>
              <Star complete={status[1]?.complete} />
              <Star complete={status[1]?.veryComplete} />
            </div>
          </Calendar>
        </Suspense>
      </Route>
      <Route path={`/:year/day/:day`}>
        <Solution />
      </Route>
    </Switch>
  );
};

export default AoC2021;
