import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

import Tutor from "./pages/Tutor"

class App extends Component {
  render() {
    return (
      <Router>
        <Route  exact path="/tutor" component={Tutor}/>
      </Router>
    );
  }
}

export default App;
