import type { ComponentType } from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router";
import Header from "./components/Header";
import AoC2015 from "./pages/2015";
import AoC2016 from "./pages/2016";
import AoC2017 from "./pages/2017";
import AoC2018 from "./pages/2018";
import AoC2019 from "./pages/2019";
import AoC2020 from "./pages/2020";
import AoC2021 from "./pages/2021";
import AoC2022 from "./pages/2022";
import AoC2023 from "./pages/2023";
import AoC2024 from "./pages/2024";
import AoC2025 from "./pages/2025";
import Home from "./pages/Home";

const pages: Record<string, ComponentType> = {
  "2015": AoC2015,
  "2016": AoC2016,
  "2017": AoC2017,
  "2018": AoC2018,
  "2019": AoC2019,
  "2020": AoC2020,
  "2021": AoC2021,
  "2022": AoC2022,
  "2023": AoC2023,
  "2024": AoC2024,
  "2025": AoC2025,
};

const Year = () => {
  const { year = "" } = useParams();
  const Page = pages[year];
  return Page ? <Page /> : <Navigate to="/" replace />;
};

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/:year/*" element={<Year />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
