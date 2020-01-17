import React from "react";
import { Tabs } from "antd";
import { Router, Route, Switch } from "react-router-dom";

import Sections from "./Sections";
import Front from "./Front";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Front} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
