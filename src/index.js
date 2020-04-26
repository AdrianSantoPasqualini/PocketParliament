import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import PocketParliament from "layouts/PocketParliament.js";
import PocketParliamentNoRouting from "layouts/PocketParliamentNoRouting.js";


import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={PocketParliamentNoRouting}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
