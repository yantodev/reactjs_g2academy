import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <h1>Ini Halaman Login</h1>
        <Footer />
      </>
    );
  }
}

export default Login;
