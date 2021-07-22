/* eslint-disable no-unused-vars */
import React, { Component } from "react";
// import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Konten from "./Konten";
import About from "./About";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Konten}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    );
  }
}

export default App;
