import React, { Component } from "react";
import { Register, Home, Login } from "../../page";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAddHandler = () => {};
  renderList = () => {};

  renderPage = () => {
    const page = this.props.page;

    if (page === "registrasi") return <Register />;

    if (page === "login") return <Login />;

    return <Home />;
  };

  render() {
    return <div className="body">{this.renderPage()}</div>;
  }
}

export default Body;
