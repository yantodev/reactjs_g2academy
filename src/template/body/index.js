import React, { Component } from "react";
import { Register, Home, Login, UsersList } from "../../page";
import swal from "sweetalert";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onAddHandler = () => {};
  renderList = () => {};

  renderPage = () => {
    let data = "2";
    const page = this.props.page;
    const session = this.props.session;
    console.log("page : ", page);
    console.log("session : ", session);
    if (page === "registrasi") return <Register />;

    if (page === "login") return <Login />;

    if (page === "user" && session !== data) {
      swal("Opss!", "Please, login first!!!");
      return <Login />;
    } else if (page === "user" && session === data) {
      return <UsersList />;
    }
    // if (page === "user" && session === data)

    return <Home />;
  };

  render() {
    return <div className="body">{this.renderPage()}</div>;
  }
}

export default Body;
