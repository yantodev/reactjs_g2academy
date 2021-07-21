import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
