import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
class About extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    let style = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    return (
      <>
        <Header />
        <div className="container">
          <h1 style={style}>Ini Halaman About</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
