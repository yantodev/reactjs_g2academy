import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { Badge, Table } from "react-bootstrap";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Konten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_start=0&_limit=5")
      .then((res) => {
        var data = res.data;
        this.setState({ data: data });

        console.log(data);
      });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <Header />
        <div id="container">
          <h2 className="text-center">
            <b>Data Mahasiswa</b>
          </h2>
          <button className="btn btn-primary mb-3">ADD Data</button>
          {/* <div id="table_crud"></div> */}
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((d) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>
                    <Badge bg="primary">Edit</Badge>
                    <br></br>
                    <Badge bg="danger">Hapus</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="pagination">
          <span>Prev</span>
          <span>1</span>
          <span className="active">2</span>
          <span>3</span>
          <span>Next</span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Konten;
