import React from "react";
import Header from "../header";
import Footer from "../footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
            <Nav variant="tabs" className="">
              <Nav.Item>
                <Nav.Link href="/CRUDs/CASE">Case</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/CRUDs/COOLING">Cooling</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/CRUDs/HDD">HDD</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/CRUDs/SSD">SSD</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/CRUDs/MOTHERBOARD">MotherBoard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/CRUDs/PSU">PowerSupply</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/CRUDs/CPU">Processeur</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/CRUDs/RAM">Mémoire</Nav.Link>
              </Nav.Item>
            </Nav>
            

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
