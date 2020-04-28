import React from "react";
import Header from "../header";
import Footer from "../footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Processeur from "./CPU/proco";
import Boîtier from "./Case/Case";
import WC from "./Cooling/Cooling";
import MB from "./motherboard/motherboard";
import RAM from "./RAM/RAM";
import HardDrive from "./HDD/HDD";
import SSD from "./SSD/SSD";
import PSU from "./PowerSupply/Powersupply";

class CRUD extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/CRUDs/CASE">Case</Link>
              </li>
              <li>
                <Link to="/CRUDs/COOLING">Cooling</Link>
              </li>
              <li>
                <Link to="/CRUDs/HDD">HDD</Link>
              </li>
              <li>
                <Link to="/CRUDs/SSD">SSD</Link>
              </li>
              <li>
                <Link to="/CRUDs/MOTHERBOARD">MotherBoard</Link>
              </li>
              <li>
                <Link to="/CRUDs/PSU">Powersupply</Link>
              </li>
              <li>
                <Link to="/CRUDs/CPU">CPU</Link>
              </li>
              <li>
                <Link to="/CRUDs/RAM">RAM</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/CRUDs/CASE">
                <Boîtier />
              </Route>
              <Route path="/CRUDs/COOLING">
                <WC />
              </Route>
              <Route path="/CRUDs/HDD">
                <HardDrive />
              </Route>
              <Route path="/CRUDs/SSD">
                <SSD />
              </Route>
              <Route path="/CRUDs/MOTHERBOARD">
                <MB />
              </Route>
              <Route path="/CRUDs/PSU">
                <PSU />
              </Route>
              <Route path="/CRUDs/CPU">
                <Processeur />
              </Route>
              <Route path="/CRUDs/RAM">
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
