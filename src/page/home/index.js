import React, { Component } from "react";

import { Table, Button } from "react-bootstrap";
import { Thead } from "../../component/tabel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    let h1 = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    const { dataUser } = this.props;
    return (
      <>
        <div className="container">
          <h1 style={h1}>Halaman Utama</h1>
          <ul>
            <li>Halaman ini rencananya akan dibuat dengan atomic desaign</li>
          </ul>
          <Table striped bordered hover variant="dark">
            <Thead />
            <tbody>
              {!dataUser.length ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    user not found...
                  </td>
                </tr>
              ) : (
                dataUser.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td colSpan="2">
                      <Button variant="secondary">Edit</Button> {" | "}
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Home;
