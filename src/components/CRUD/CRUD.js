import React from "react";
import Header from "../header";
import Footer from "../footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



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
                                
                            </Route>
                            <Route path="/CRUDs/cooling">
                                
                            </Route>
                            <Route path="/CRUDs/hdd">
                                
                            </Route>
                            <Route path="/CRUDs/ssd">
                                
                            </Route>
                            <Route path="/CRUDs/motherboard">
                                
                            </Route>
                            <Route path="/CRUDs/powersupply">
                                
                            </Route>
                            <Route path="/CRUDs/cpu">
                                
                            </Route>
                            <Route path="/CRUDs/ram">
                                
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
