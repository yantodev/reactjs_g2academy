import React, { Component } from "react";

import Header from "./Header";
// import Body from "./Body";
import Footer from "./Footer";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <h1>Ini Halaman About</h1>
        <Footer />
      </>
    );
  }
}

export default About;
