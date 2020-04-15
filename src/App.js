import React from "react";
import "./App.css"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./pages/home";
import CRUD from "./components/CRUD/CRUD";

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
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/CRUDs">
                <CRUD />
              </Route>
              <Route path="/boutique">
                
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
