import React from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Case from "./components/CRUD/Case";
import WC from "./components/CRUD/Cooling";
import HardDrive from "./components/CRUD/HDD";
import SSD from "./components/CRUD/SSD";
import MB from "./components/CRUD/motherboard";
import PSU from "./components/CRUD/Powersupply";
import CPU from "./components/CRUD/proco";
import RAM from "./components/CRUD/RAM";
import Home from "./pages/home";

const firebase = require("firebase");
require("firebase/firestore");

var FirebaseConfig = {
  apiKey: "AIzaSyAJDdWdPSXRxTukWUhYqrLh44HqBCXl4F4",
  authDomain: "hardware-web.firebaseapp.com",
  databaseURL: "https://hardware-web.firebaseio.com",
  projectId: "hardware-web",
  storageBucket: "hardware-web.appspot.com",
  messagingSenderId: "762528731852",
  appId: "1:762528731852:web:46def58e7b0c6606136869",
  measurementId: "G-19KQ1NJ1N2",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(FirebaseConfig);
}

function App() {
  return (
    <div>
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="CRUDs">CRUD's</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route exact path="/">
                {/* <Home /> */}
              </Route>
              <Route path="/CRUDs">
                <Crud />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

function Crud() {
  return (
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

        <hr />

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
  );
}

export default App;
