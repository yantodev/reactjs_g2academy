import React, { Component } from "react";
//class Componet Header
class Header extends Component {
  render() {
    return (
      <div id="header">
        <span className="logo">
          <a href="index.html">Yanto.web</a>
        </span>
        <span className="website-menu">
          <a href="/template/frontend/index.html">Home</a>
          <a href="/">About</a>
          <a href="/template/frontend/login.html">Login</a>
        </span>
      </div>
    );
  }
}

export default Header;
