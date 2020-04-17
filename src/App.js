import React from "react";
import "./App.css";
import "firebase/firestore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import CRUD from "./components/CRUD/CRUD";
import Connection from "./pages/ConnectPage";
import Processeur from "./pages/pages_composants/CPU"
import Boîtier from "./pages/pages_composants/Boîtier";
import Refroidissement from "./pages/pages_composants/Refroidissement";
import Carte_Mère from "./pages/pages_composants/Carte_Mère";
import Mémoire from "./pages/pages_composants/Mémoire";

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
          <Route path="/CPU">
            <Processeur />
          </Route>
          <Route path="/Boîtier">
            <Boîtier/>
          </Route>
          <Route path="/Carte_Mère">
            <Carte_Mère />
          </Route>
          <Route path="/Mémoire">
            <Mémoire />
          </Route>
          <Route path="/Refroidissement">
            <Refroidissement />
          </Route>
          <Route path="/News">
            <Home/>
          </Route>
          <Route path="/Configuration">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
