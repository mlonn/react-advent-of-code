import React, { Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Calendar from "../../components/Calendar";
import Solution from "../../components/Solution";
import Footer from "./components/Footer";
import status from "./status";

const days = [...Array(25)].map((_, i) => {
  const day = i + 1;
  return {
    Day: React.lazy(() => import(`./days/${i + 1}/Link`)),
    dayStatus: status[day],
  };
});

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
                  <Day
                    year={2015}
                    day={i + 1}
                    complete={dayStatus?.complete}
                    veryComplete={dayStatus?.veryComplete}
                  />
                );
              })
              .reverse()}
            <Footer />
          </Calendar>
        </Suspense>
      </Route>
      <Route path={`${path}/day/:day`}>
        <Solution />
      </Route>
    </Switch>
  );
};

export default AoC2015;
