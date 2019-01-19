import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import Tutor from "./pages/Tutor";
import OpenRequest from "./pages/OpenRequest";
import AcceptedRequest from "./pages/AcceptedRequest";

class App extends Component {
  state = {
    tutorInfo: {}
  }

  componentDidMount() {
    this.getInfo();
    this.printInfo();
  }

  getInfo = () => {
    console.log("app: getInfo");
    axios.get("/tutor-info/5c42596f8b8a8201f0e74724")
    .then(data => {
      console.log(data.data[0]);
      this.setState({tutorInfo: data.data[0]});
    })
  }
  
  printInfo = () => {
    console.log(this.state.tutorInfo);

  }

  render() {
    return (
      <Router>
        <div>
    <Route  exact path="/tutor" render={() => <Tutor tutorInfo={this.state.tutorInfo}/>}/>
        <Route exact path="/open-requests" component={OpenRequest}/>
        <Route exact path="/accepted-requests" component={AcceptedRequest}/>
        </div>
      </Router>
    );
  }
}

export default App;
