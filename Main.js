import React from "react";
import { Switch, Route } from "react-router-dom";
import Tags from "./Tags";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Tags} />
    </Switch>
  </main>
);
export default Main;
