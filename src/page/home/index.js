import React, { Component } from "react";

import { Table, Button } from "react-bootstrap";
import { Thead, Tr, Th, Tbody, Td } from "../../component/tabel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hidden: "hidden",
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
          <h1 style={h1}>Untuk Tester Data</h1>

          <Table striped bordered hover variant="dark">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Address</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataUser.map((data, index) => (
                <Tr key={data.id}>
                  <Td>{index + 1}</Td>
                  <Td>{data.name}</Td>
                  <Td>{data.username}</Td>
                  <Td>{data.email}</Td>
                  <Td>{data.password}</Td>
                  <Td>{data.address}</Td>
                  <Td colSpan="2">
                    <Button variant="secondary">Edit</Button>
                    {" | "}
                    <Button variant="danger">Delete</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Home;
