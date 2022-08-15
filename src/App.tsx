import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AoC2015 from "./pages/2015";
import AoC2016 from "./pages/2016";
import Home from "./pages/Home";
import AoC2018 from "./pages/2018";
import AoC2019 from "./pages/2019";
function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/2015">
            <AoC2015 />
          </Route>
          <Route path="/2016">
            <AoC2016 />
          </Route>
          <Route path="/2018">
            <AoC2018 />
          </Route>
          <Route path="/2019">
            <AoC2019 />
          </Route>
          {/*
          <Route path="/2017">
            <AoC2017 />
          </Route>
          <Route path="/2020">
            <AoC2020 />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
