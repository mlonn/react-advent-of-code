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
            <Day complete day={14}>
              @@#@@##@@@@@@<span className="calendar-color-g1">##</span> <span className="calendar-color-w">|||</span> <span className="calendar-color-g1">@</span>
              <span className="calendar-color-g2">@</span>@##@@@@@@@@@@@@#@#@@@@@@##@
            </Day>
            <DayLabel>14</DayLabel>
            <div>
              <Star complete={status[14]?.complete} />
              <Star complete={status[14]?.veryComplete} />
            </div>
            <Day complete day={13}>
              @@#@###@@#@#@@<span className="calendar-color-g3">@</span>
              <span className="calendar-color-g2">@</span>
              <span className="calendar-color-w">~~~</span>
              <span className="calendar-color-g3">#@</span>@@@@@#@@@@@@@@@###@@@@#@@@#@
            </Day>
            <DayLabel>13</DayLabel>
            <div>
              <Star complete={status[13]?.complete} />
              <Star complete={status[13]?.veryComplete} />
            </div>
            <Day complete day={12}>
              @@@##@##@@@@<span className="calendar-color-g2">@</span>
              <span className="calendar-color-g1">@</span>
              <span className="calendar-color-u">.~~.</span>
              <span className="calendar-color-g0">@@</span>@#@@@#@@##@@#@@@#@@@@##@@#@@@
            </Day>
            <DayLabel>12</DayLabel>
            <div>
              <Star complete={status[12]?.complete} />
              <Star complete={status[12]?.veryComplete} />
            </div>
            <Day complete day={11}>
              <span className="calendar-color-g4">#</span>
              <span className="calendar-color-g1">@</span>
              <span className="calendar-color-g3">@</span>
              <span className="calendar-color-s">.</span>
              <span className="calendar-color-g1">@@#</span>
              <span className="calendar-color-g2">#</span>
              <span className="calendar-color-g3">#@</span>
              <span className="calendar-color-g2">@</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-u">.~~.</span>
              <span className="calendar-color-g2">#</span>
              <span className="calendar-color-g3">#</span>#@@@@###@@@@@@##@@@@#@@@@@@@@#@
            </Day>
            <DayLabel>11</DayLabel>
            <div>
              <Star complete={status[11]?.complete} />
              <Star complete={status[11]?.veryComplete} />
            </div>
            <Day complete day={10}>
              <span className="calendar-color-g1">#</span>
              <span className="calendar-color-g4">#</span>
              <span className="calendar-color-g3">@</span>
              <span className="calendar-color-s">.</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-g4">@#</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-g1">#</span>
              <span className="calendar-color-g3">#</span>
              <span className="calendar-color-g2">#</span>
              <span className="calendar-color-u">.~~.</span>
              <span className="calendar-color-g2">#</span>
              <span className="calendar-color-g0">#</span>
              <span className="calendar-color-g1">#</span>
              <span className="calendar-color-g0">#@</span>@@##@#@#@@@##@@####@#@#@#@@@@
            </Day>
            <DayLabel>10</DayLabel>
            <div>
              <Star complete={status[10]?.complete} />
              <Star complete={status[10]?.veryComplete} />
            </div>
            <Day complete day={9}>
              #@@@@@#@@@@<span className="calendar-color-s">%%%%%|</span>
              <span className="calendar-color-a">_</span> <span className="calendar-color-g3">@</span>
              <span className="calendar-color-g1">@</span>
              <span className="calendar-color-g3">@</span>
              <span className="calendar-color-g2">@</span>
              <span className="calendar-color-g1">@#</span>@@@@@@#@@|@@@@@@#@@##@@#
            </Day>
            <DayLabel>9</DayLabel>
            <div>
              <Star complete={status[9]?.complete} />
              <Star complete={status[9]?.veryComplete} />
            </div>
            <Day complete day={8}>
              #@@<span className="calendar-color-g2">#</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-s">..</span>
              <span className="calendar-color-a">{`/  \\`}</span>
              <span className="calendar-color-u">.~~.</span>
              <span className="calendar-color-a">{`/  \\`}</span>
              <span className="calendar-color-s">.....</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-g4">@</span>@@#@#@#@@@@@@#@@@###@#@
            </Day>
            <DayLabel>8</DayLabel>
            <div>
              <Star complete={status[8]?.complete} />
              <Star complete={status[8]?.veryComplete} />
            </div>
            <Day complete day={7}>
              @@@@#@##@<span className="calendar-color-g4">@@</span>
              <span className="calendar-color-u">.~~.</span>
              <span className="calendar-color-g2">@</span>
              <span className="calendar-color-g1">@</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-g4">@</span>
              <span className="calendar-color-g3">@</span>
              <span className="calendar-color-g0">#</span>
              <span className="calendar-color-g2">@</span>
              <span className="calendar-color-g1">@</span>
              <span className="calendar-color-g3">@</span>
              <span className="calendar-color-s">.</span>
              <span className="calendar-color-g3">#</span>
              <span className="calendar-color-g1">#</span>@@#@@##@@#@@###@@@#@@@
            </Day>
            <DayLabel>7</DayLabel>
            <div>
              <Star complete={status[7]?.complete} />
              <Star complete={status[7]?.veryComplete} />
            </div>
            <Day complete day={6}>
              @@@@#@@@@@<span className="calendar-color-g0">@@</span>
              <span className="calendar-color-u">.~~.</span>
              <span className="calendar-color-g3">@@</span>
              <span className="calendar-color-g2">@</span>
              <span className="calendar-color-g3">#</span>
              <span className="calendar-color-g4">#</span>
              <span className="calendar-color-g3">@</span>
              <span className="calendar-color-g2">#</span>
              <span className="calendar-color-s">..</span>
              <span className="calendar-color-g4">#</span>
              <span className="calendar-color-g0">@</span>@##@@@@#@@@#@@#@@#@@#@
            </Day>
            <DayLabel>6</DayLabel>
            <div>
              <Star complete={status[6]?.complete} />
              <Star complete={status[6]?.veryComplete} />
            </div>
            <Day day={5} complete>
              ##@@@@@#@@<span className="calendar-color-g0">@</span>
              <span className="calendar-color-g4">#</span>
              <span className="calendar-color-g1">#</span>
              <span className="calendar-color-u">.~~.</span>
              <span className="calendar-color-g2">#</span>
              <span className="calendar-color-g3">#</span>
              <span className="calendar-color-s">.</span>
              <span className="calendar-color-c">/\</span>
              <span className="calendar-color-s">.'</span>
              <span className="calendar-color-g2">@</span>
              <span className="calendar-color-g1">#@</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-g2">@</span>#@###@@##@#@@@@@##@@
            </Day>
            <DayLabel>5</DayLabel>
            <div>
              <Star complete={status[5]?.complete} />
              <Star complete={status[5]?.veryComplete} />
            </div>
            <Day day={4} complete>
              @@@#@##<span className="calendar-color-g3">@@</span>
              <span className="calendar-color-g0">#</span>
              <span className="calendar-color-g4">@</span>
              <span className="calendar-color-s">.'</span>
              <span className="calendar-color-u">{` ~ `}</span>
              <span className="calendar-color-s">'.</span>
              <span className="calendar-color-c">/\</span>
              <span className="calendar-color-s">'.</span>
              <span className="calendar-color-c">/\</span>
              <span className="calendar-color-s">{`'  .`}</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-g3">#</span>
              <span className="calendar-color-d">|</span>@@@@@|#@@@#@@@@#@@
            </Day>
            <DayLabel>4</DayLabel>
            <div>
              <Star complete={status[4]?.complete} />
              <Star complete={status[4]?.veryComplete} />
            </div>
            <Day day={3} complete>
              {`@@@`}
              <span className="calendar-color-g1">@</span>
              <span className="calendar-color-g3">#</span>
              <span className="calendar-color-g0">@</span>
              <span className="calendar-color-g3">@</span>
              <span className="calendar-color-g1">@</span>
              <span className="calendar-color-g2">#</span>
              <span className="calendar-color-s">_/</span>
              <span className="calendar-color-u">{` ~   ~  `}</span>
              <span className="calendar-color-s">\ ' '. '.'.</span>
              <span className="calendar-color-g4">#</span>
              <span className="calendar-color-g2">#</span>
              {`##@#@##@@#@@@@@@@`}
            </Day>
            <DayLabel>3</DayLabel>
            <div>
              <Star complete={status[3]?.complete} />
              <Star complete={status[3]?.veryComplete} />
            </div>
            <Day day={2} complete>
              <span className="calendar-color-s">{`-~------'`}</span>
              <span className="calendar-color-u">{`    ~    ~ `}</span>
              <span className="calendar-color-s">{`'--~-----~-~----___________--`}</span>
            </Day>
            <DayLabel>2</DayLabel>
            <div>
              <Star complete={status[2]?.complete} />
              <Star complete={status[2]?.veryComplete} />
            </div>
            <Day day={1} complete>
              <span className={"calendar-color-u"}>{`  ~    ~  ~      ~     ~ ~   ~     ~  ~  ~   ~   `}</span>
            </Day>
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
