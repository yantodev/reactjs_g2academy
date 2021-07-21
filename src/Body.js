// import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";

const Body = function () {
  let profil = {
    nama: ["Eko", "Yadi"],
    email: ["eko@gmail.com", "yadi@mail.com"],
    address: ["Jogja", "Semarang"],
  };
  return (
    <div id="container">
      <h2 class="text-center">
        <b>Data Mahasiswa</b>
      </h2>
      <button class="btn btn-primary mb-3" onclick="addRow();">
        ADD Data
      </button>
      <div id="table_crud">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{profil.nama[0]}</td>
              <td>{profil.email[0]}</td>
              <td>{profil.address[0]}</td>
              <td>
                <Badge pill bg="primary">
                  Edit
                </Badge>{" "}
                <Badge pill bg="danger">
                  Hapus
                </Badge>{" "}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>{profil.nama[1]}</td>
              <td>{profil.email[1]}</td>
              <td>{profil.address[1]}</td>
              <td>
                <Badge pill bg="primary">
                  Edit
                </Badge>{" "}
                <Badge pill bg="danger">
                  Hapus
                </Badge>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div class="pagination">
        <span>Prev</span>
        <span>1</span>
        <span class="active">2</span>
        <span>3</span>
        <span>Next</span>
      </div>
    </div>
  );
};

export default Body;
