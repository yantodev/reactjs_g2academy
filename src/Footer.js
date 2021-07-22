import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="footer">
        <p>
          © 2021 |
          <a href="https://belajarbarengyanto.wordpress.com/">
            belajarbarengyanto.wordpress.com
          </a>
          | Eko Cahyanto
        </p>
      </div>
    );
  }
}

export default Footer;
