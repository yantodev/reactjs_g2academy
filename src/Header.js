import React, { Component } from "react";
//class Componet Header
class Header extends Component {
  render() {
    return (
      <div id="header">
        <span className="logo">
          <a href="/">Yanto.web</a>
        </span>
        <span className="website-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/latihan">Latihan</a>
          <a href="/login">Login</a>
        </span>
      </div>
    );
  }
}

export default Header;
