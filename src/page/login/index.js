import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container">
          <h1>Login</h1>
          <Form>
            <Form.Group className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </>
    );
  }
}

export default Login;
