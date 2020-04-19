import React from "react";
import Header from "../header";
import Footer from "../footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Case from "./Case";
import WC from "./Cooling";
import HardDrive from "./HDD";
import SSD from "./SSD";
import MB from "./motherboard";
import PSU from "./Powersupply";
import CPU from "./proco";
import RAM from "./RAM";
import Proco from "./proco";

class CRUD extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/Crud/case">Case</Link>
              </li>
              <li>
                <Link to="/Crud/cooling">Cooling</Link>
              </li>
              <li>
                <Link to="/Crud/hdd">HDD</Link>
              </li>
              <li>
                <Link to="/Crud/ssd">SSD</Link>
              </li>
              <li>
                <Link to="/Crud/motherboard">MotherBoard</Link>
              </li>
              <li>
                <Link to="/Crud/powersupply">Powersupply</Link>
              </li>
              <li>
                <Link to="/Crud/cpu">CPU</Link>
              </li>
              <li>
                <Link to="/Crud/ram">RAM</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/Crud/case">
                <Case />
              </Route>
              <Route path="/Crud/cooling">
                <WC />
              </Route>
              <Route path="/Crud/hdd">
                <HardDrive />
              </Route>
              <Route path="/Crud/ssd">
                <SSD />
              </Route>
              <Route path="/Crud/motherboard">
                <MB />
              </Route>
              <Route path="/Crud/powersupply">
                <PSU />
              </Route>
              <Route path="/Crud/cpu">
                <Proco />
              </Route>
              <Route path="/Crud/ram">
                <RAM />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default CRUD;
