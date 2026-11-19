import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Calendar from "../../components/Calendar";
import Solution from "../../components/Solution";
import Star from "../../components/Star";
import Footer from "./components/Footer";
import status from "./status";

const days = [...Array(25)].map((_, i) => {
  const day = i + 1;
  return {
    Day: React.lazy(() => import(`./day/${i + 1}/Link.tsx`)),
    dayStatus: status[day],
  };
});

const DayLabel = styled.span`
  text-align: end;
`;
const AoC2016 = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <Calendar>
                {days
                  .map(({ Day, dayStatus }, i) => {
                    return (
                      <Fragment key={i}>
                        <Day day={i + 1} complete={dayStatus?.complete} veryComplete={dayStatus?.veryComplete} />
                        <DayLabel>{i + 1}</DayLabel>
                        <div>
                          <Star complete={dayStatus?.complete} />
                          <Star complete={dayStatus?.veryComplete} />
                        </div>
                      </Fragment>
                    );
                  })
                  .reverse()}
                <Footer />
              </Calendar>
            </Suspense>
          </>
        }
      />
      <Route path="day/:day" element={<Solution />} />
    </Routes>
  );
};

export default AoC2016;
