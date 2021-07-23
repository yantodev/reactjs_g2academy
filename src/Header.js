import React, { Component } from "react";
//class Componet Header
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Yanto.web</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Tugas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/latihan">Latihan 1</NavDropdown.Item>
                <NavDropdown.Item href="/latihan2">Latihan 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
