import React, { Component } from "react";
import { Nav, Body } from "./template";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "registrasi",
    };
  }
  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    return (
      <>
        <Nav page={this.state.currentPage} goToPage={this.changePage} />
        <Body page={this.state.currentPage} />
      </>
    );
  }
}

export default App;

/**
 * Latihan:
 *        - Buat pagination untuk login, register dan list user
 *        - Setiap user yang register, masuk ke daftar list user
 *        - Setiap user yang login, ngecek data ke list user
 *        - Terapkan atomic design
 */
