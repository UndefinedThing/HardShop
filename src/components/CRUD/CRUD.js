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

class CRUD extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Router>
                    <div>
                        <ul>
                        <li>
                            <Link to="/CRUDs/case">Case</Link>
                        </li>
                        <li>
                            <Link to="/CRUDs/cooling">Cooling</Link>
                        </li>
                        <li>
                            <Link to="/CRUDs/hdd">HDD</Link>
                        </li>
                        <li>
                            <Link to="/CRUDs/ssd">SSD</Link>
                        </li>
                        <li>
                            <Link to="/CRUDs/motherboard">MotherBoard</Link>
                        </li>
                        <li>
                            <Link to="/CRUDs/powersupply">Powersupply</Link>
                        </li>
                        <li>
                            <Link to="/CRUDs/cpu">CPU</Link>
                        </li>
                        <li>
                            <Link to="/CRUDs/ram">RAM</Link>
                        </li>
                        </ul>

                        <Switch>
                        <Route path="/CRUDs/case">
                            <Case />
                        </Route>
                        <Route path="/CRUDs/cooling">
                            <WC />
                        </Route>
                        <Route path="/CRUDs/hdd">
                            <HardDrive />
                        </Route>
                        <Route path="/CRUDs/ssd">
                            <SSD />
                        </Route>
                        <Route path="/CRUDs/motherboard">
                            <MB />
                        </Route>
                        <Route path="/CRUDs/powersupply">
                            <PSU />
                        </Route>
                        <Route path="/CRUDs/cpu">
                            <CPU />
                        </Route>
                        <Route path="/CRUDs/ram">
                            <RAM />
                        </Route>
                        </Switch>
                    </div>
                    </Router> 
                <Footer/>
            </div>
        )
    }
}

export default CRUD;