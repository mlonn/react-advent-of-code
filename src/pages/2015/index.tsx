import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Calendar from "../../components/Calendar";
import Solution from "../../components/Solution";
import Star from "../../components/Star";
import Background from "./components/Background";
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
const AoC2015 = () => {
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
                      <React.Fragment key={i}>
                        <Day day={i + 1} complete={dayStatus?.complete} veryComplete={dayStatus?.veryComplete} />
                        <DayLabel>{i + 1}</DayLabel>
                        <div>
                          <Star complete={dayStatus?.complete} />
                          <Star complete={dayStatus?.veryComplete} />
                        </div>
                      </React.Fragment>
                    );
                  })
                  .reverse()}
                <Footer />
              </Calendar>
              <Background />
            </Suspense>
          </>
        }
      />
      <Route path="day/:day" element={<Solution />} />
    </Routes>
  );
};

export default AoC2015;
