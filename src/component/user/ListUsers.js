// import React from "react";
import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

import { useRecoilValue, useResetRecoilState } from "recoil";
import { filterUsers, filterUsersValue, users } from ".";
// import EditModal from "./modals/EditModal";
// import DeleteModal from "./modals/DeleteModal";

const ListUsers = () => {
  const productsState = useRecoilValue(filterUsers);
  const resetList = useResetRecoilState(users);
  const resetfilterUsersValue = useResetRecoilState(filterUsersValue);

  // Modals
  // const [showEdit, setShowEdit] = useState(false);
  // const [showDelete, setShowDelete] = useState(false);
  // const [userId4Actions, setUserId4Actions] = useState(0);
  const [setShowEdit] = useState(false);
  const [setShowDelete] = useState(false);
  const [setUserId4Actions] = useState(0);

  // const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  // const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  const resetAtoms = () => {
    resetList();
    resetfilterUsersValue();
  };

  const editProduct = (id) => {
    handleEditShow();
    setUserId4Actions(id);
  };

  const deleteProduct = (id) => {
    handleDeleteShow();
    setUserId4Actions(id);
  };
  let h1 = {
    textAlign: "center",
    fontWeight: "bolder",
  };
  return (
    <>
      <h1 style={h1}>Daftar User</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!productsState.length ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Please login first to access this tab...
              </td>
            </tr>
          ) : (
            productsState.map((item, index) => (
              <tr key={item.id}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td colSpan="2">
                  <Button
                    variant="secondary"
                    onClick={() => editProduct(item.id)}
                  >
                    Edit
                  </Button>{" "}
                  {" | "}
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Button variant="secondary" size="lg" onClick={() => resetAtoms()}>
        Clear Data
      </Button>

      {/* <EditModal
        show={showEdit}
        id={userId4Actions}
        handleClose={handleEditClose}
      />

      <DeleteModal
        show={showDelete}
        id={userId4Actions}
        handleClose={handleDeleteClose}
      /> */}
    </>
  );
};

export default ListUsers;
