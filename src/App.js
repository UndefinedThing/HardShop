import React from "react";
import "./App.css";
import "firebase/firestore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import CRUD from "./components/CRUD/CRUD";
import Connection from "./pages/ConnectPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/CRUDs">
            <CRUD />
          </Route>
          <Route path="/Auth">
            <Connection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
