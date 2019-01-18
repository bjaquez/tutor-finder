import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

import Tutor from "./pages/Tutor";
import OpenRequest from "./pages/OpenRequest";
import AcceptedRequest from "./pages/AcceptedRequest";

class App extends Component {
  render() {
    return (
      <Router>
        <Route  exact path="/tutor" component={Tutor}/>
        <Route exact path="/open-requests" component={OpenRequest}/>
        <Route exact path="/accepted-requests" component={AcceptedRequest}/>
      </Router>
    );
  }
}

export default App;
