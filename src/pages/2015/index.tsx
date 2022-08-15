import React, { Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Calendar from "../../components/Calendar";
import Solution from "./components/Solution";
import Star from "../../components/Star";
import Background from "./components/Background";
import Footer from "./components/Footer";
import status from "./status";

const days = [...Array(25)].map((_, i) => {
  const day = i + 1;
  return {
    Day: React.lazy(() => import(`./day/${i + 1}/Link`)),
    dayStatus: status[day],
  };
});

const DayLabel = styled.span`
  text-align: end;
`;
const AoC2015 = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Suspense fallback={<div>Loading...</div>}>
          <Calendar>
            {days
              .map(({ Day, dayStatus }, i) => {
                return (
                  <>
                    <Day
                      year={2015}
                      day={i + 1}
                      complete={dayStatus?.complete}
                      veryComplete={dayStatus?.veryComplete}
                    />
                    <DayLabel>{i + 1}</DayLabel>
                    <div>
                      <Star complete={dayStatus?.complete} />
                      <Star complete={dayStatus?.veryComplete} />
                    </div>
                  </>
                );
              })
              .reverse()}
            <Footer />
          </Calendar>
          <Background />
        </Suspense>
      </Route>
      <Route path={`${path}/day/:day`}>
        <Solution />
      </Route>
    </Switch>
  );
};

export default AoC2015;
