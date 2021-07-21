import React, { Component } from "react";
//class Componet Header
class Header extends Component {
  render() {
    return (
      <div id="header">
        <span class="logo">
          <a href="index.html">Yanto.web</a>
        </span>
        <span class="website-menu">
          <a href="/template/frontend/index.html">Home</a>
          <a href="/template/frontend/about.html">About</a>
          <a href="/template/frontend/login.html">Login</a>
        </span>
      </div>
    );
  }
}

export default Header;
