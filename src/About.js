import React, { Component } from "react";
import "./css/about.css";

import Header from "./Header";
import Footer from "./Footer";
class About extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    // let style = {
    //   textAlign: "center",
    //   fontWeight: "bolder",
    // };
    return (
      <>
        <Header />
        {/* <div className="container">
          <h1 style={style}>Ini Halaman About</h1>
        </div> */}
        <nav
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="navbar-collapse-main"
              >
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="/" className="navbar-brand">
                Yanto.web
              </a>
            </div>
            {/* <!-- .navbar-header --> */}
            <div className="collapse navbar-collapse" id="navbar-collapse-main">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portofolio">Portofilio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* <!-- #navbar-collapse-main --> */}
          </div>
          {/* <!-- .container-fluid --> */}
        </nav>
        <div id="home">
          <div className="text-vcenter">
            <h1>YantoWeb</h1>
            <h3>Your Idea Brought To Life</h3>
          </div>
        </div>
        {/* <!-- #home --> */}
        <div id="about" className="pad-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-5">
                <img
                  className="circle-border img-responsive"
                  src="https://source.unsplash.com/VkwRmha1_tI"
                  alt=""
                />
              </div>
              <div className="col-sm-6 text-center">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in sem cras amet.
                </h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  interdum metus et ligula venenatis, at rhoncus nisi molestie.
                  Pellentesque porttitor elit suscipit massa laoreet metus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="portofolio">
          <h1 className="text-primary">Portofolio here</h1>
        </div>
        <div id="contact">
          <h1 className="text-primary">Contact here</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
