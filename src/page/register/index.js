import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import swal from "sweetalert2";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser: [
        {
          name: "",
          username: "",
          email: "",
          password: "",
          address: "",
        },
      ],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, username, email, address, password } = this.state;

    if (username === "" || password === "" || email === "") {
      swal.fire("Opss!", "fields must not be empty", "error");
    } else if (email.indexOf(" ") !== -1 || password.indexOf(" ") !== -1) {
      swal("Opss!", "fields mus not contain spaces", "error");
    } else {
      this.props.handleSubmit(name, username, email, password, address);
      this.setState({
        name: "",
        username: "",
        email: "",
        address: "",
        password: "",
      });
      swal.fire("Yeahh!", "User is registered!!", "success");
    }
    console.log("test", this.state.email);
  };

  render() {
    const { name, username, email, password, address } = this.state;
    const login = this.props;
    if (login) {
      return (
        <div className="container">
          <h1>Register</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  type="address"
                  placeholder="Address"
                  value={address}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  type="address"
                  placeholder="Address"
                  value={address}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      );
    }
  }
}

export default Signup;
