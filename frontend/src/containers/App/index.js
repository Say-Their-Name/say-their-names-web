import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import PersonDetail from "../PersonDetail";
import Collection from "../Collection";


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Collection} exact />
        <Route path="/people/:id" component={PersonDetail} exact />
      </Switch>
    </div>
  );
}

export default App;
