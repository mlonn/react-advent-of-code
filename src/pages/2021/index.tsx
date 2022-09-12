import React, { Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Calendar from "../../components/Calendar";
import Solution from "../../components/Solution";
import status from "./status";
import Day from "./components/Day";
import Star from "../../components/Star";

const DayLabel = styled.span`
  text-align: end;
`;
const AoC2021 = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Suspense fallback={<div>Loading...</div>}>
          <Calendar>
            <Day day={1}>{`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  `}</Day>
            <DayLabel>1</DayLabel>
            <div>
              <Star complete={status[1]?.complete} />
              <Star complete={status[1]?.veryComplete} />
            </div>
            <Day day={2}>{`      '    .   '   .   .~ ~  .   .  . '    ..''''  `}</Day>
            <DayLabel>2</DayLabel>
            <div>
              <Star complete={status[2]?.complete} />
              <Star complete={status[2]?.veryComplete} />
            </div>
            <Day day={3}>{`     . ..     .  .    .   .     .  .'     :        `}</Day>
            <DayLabel>3</DayLabel>
            <div>
              <Star complete={status[3]?.complete} />
              <Star complete={status[3]?.veryComplete} />
            </div>
            <Day day={4}>{` ..    .  . . .        .        .'    ....'        `}</Day>
            <DayLabel>4</DayLabel>
            <div>
              <Star complete={status[4]?.complete} />
              <Star complete={status[4]?.veryComplete} />
            </div>
            <Day day={5}>{`.  .. ..    .    . .   '      ..|..''             `}</Day>
            <DayLabel>5</DayLabel>
            <div>
              <Star complete={status[5]?.complete} />
              <Star complete={status[5]?.veryComplete} />
            </div>
            <Day day={6}>{`      .      .    '~   '     :                     `}</Day>
            <DayLabel>6</DayLabel>
            <div>
              <Star complete={status[6]?.complete} />
              <Star complete={status[6]?.veryComplete} />
            </div>
            <Day day={7}>{`    ..             ..   ~. :'                      `}</Day>
            <DayLabel>7</DayLabel>
            <div>
              <Star complete={status[7]?.complete} />
              <Star complete={status[7]?.veryComplete} />
            </div>
            <Day day={8}>{`        ..      .    .      '''''.....  ....       `}</Day>
            <DayLabel>8</DayLabel>
            <div>
              <Star complete={status[8]?.complete} />
              <Star complete={status[8]?.veryComplete} />
            </div>
            <Day day={9}>{` .       ..   .           :'..  ..    ''    ':     `}</Day>
            <DayLabel>9</DayLabel>
            <div>
              <Star complete={status[9]?.complete} />
              <Star complete={status[9]?.veryComplete} />
            </div>
            <Day day={10}>{` .    .      .  ' .       :   ''  ''''..     '.    `}</Day>
            <DayLabel>10</DayLabel>
            <div>
              <Star complete={status[10]?.complete} />
              <Star complete={status[10]?.veryComplete} />
            </div>
            <Day day={11}>{`          .    .  .   '   :             '..'. :    `}</Day>
            <DayLabel>11</DayLabel>
            <div>
              <Star complete={status[11]?.complete} />
              <Star complete={status[11]?.veryComplete} />
            </div>
            <Day day={12}>{`. ... ..'  ~       ~.    :       :'''..   ..' :    `}</Day>
            <DayLabel>12</DayLabel>
            <div>
              <Star complete={status[12]?.complete} />
              <Star complete={status[12]?.veryComplete} />
            </div>
            <Day day={13}>{`    .       . .. .  .. .'    ..''      ''' ...:    `}</Day>
            <DayLabel>13</DayLabel>
            <div>
              <Star complete={status[13]?.complete} />
              <Star complete={status[13]?.veryComplete} />
            </div>
            <Day day={14}>{`. ..  ..              : ...''  ..':   ....'        `}</Day>
            <DayLabel>14</DayLabel>
            <div>
              <Star complete={status[14]?.complete} />
              <Star complete={status[14]?.veryComplete} />
            </div>
            <Day day={15}>{`      .'   '     .    :' ...'''    '''             `}</Day>
            <DayLabel>15</DayLabel>
            <div>
              <Star complete={status[15]?.complete} />
              <Star complete={status[15]?.veryComplete} />
            </div>
            <Day day={16}>{`'.'. .      '   :'. ....'                          `}</Day>
            <DayLabel>16</DayLabel>
            <div>
              <Star complete={status[16]?.complete} />
              <Star complete={status[16]?.veryComplete} />
            </div>
            <Day day={17}>{`   :     ..     :  '                               `}</Day>
            <DayLabel>17</DayLabel>
            <div>
              <Star complete={status[17]?.complete} />
              <Star complete={status[17]?.veryComplete} />
            </div>
            <Day day={18}>{`   :        . ..'                                  `}</Day>
            <DayLabel>18</DayLabel>
            <div>
              <Star complete={status[18]?.complete} />
              <Star complete={status[18]?.veryComplete} />
            </div>
            <Day day={19}>{`   '.    .  . :                                    `}</Day>
            <DayLabel>19</DayLabel>
            <div>
              <Star complete={status[19]?.complete} />
              <Star complete={status[19]?.veryComplete} />
            </div>
            <Day day={20}>{`    '.  .   . :                                    `}</Day>
            <DayLabel>20</DayLabel>
            <div>
              <Star complete={status[20]?.complete} />
              <Star complete={status[20]?.veryComplete} />
            </div>
            <Day day={21}>{`      : .    :                                     `}</Day>
            <DayLabel>21</DayLabel>
            <div>
              <Star complete={status[21]?.complete} />
              <Star complete={status[21]?.veryComplete} />
            </div>
            <Day day={22}>{`      '.     :                                     `}</Day>
            <DayLabel>22</DayLabel>
            <div>
              <Star complete={status[22]?.complete} />
              <Star complete={status[22]?.veryComplete} />
            </div>
            <Day day={23}>{`       :    .'                                     `}</Day>
            <DayLabel>23</DayLabel>
            <div>
              <Star complete={status[23]?.complete} />
              <Star complete={status[23]?.veryComplete} />
            </div>
            <Day day={24}>{`       :   .'                                      `}</Day>
            <DayLabel>24</DayLabel>
            <div>
              <Star complete={status[24]?.complete} />
              <Star complete={status[24]?.veryComplete} />
            </div>
            <Day day={25}>{`       :..:                                        `}</Day>
            <DayLabel>25</DayLabel>
            <div>
              <Star complete={status[25]?.complete} />
              <Star complete={status[25]?.veryComplete} />
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
