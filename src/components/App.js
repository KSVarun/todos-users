import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Front from "./Front";
import history from "./history";
import AddUser from "./AddUser";
import AddTodo from "./AddTodo";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Front} />
            <Route path="/addUser" exact component={AddUser} />
            <Route path="/addTodo" exact component={AddTodo} />
            <Route path="/editUser/:key" exact component={AddUser} />
            <Route path="/editTodo/:key" exact component={AddTodo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
