import React, { Component } from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { Thead, Tr, Th, Tbody, Td } from "../../component/tabel";

class JsonPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      dataEdit: [
        {
          name: "",
          username: "",
        },
      ],
    };
  }
  handleEdit = (e) => {
    console.log(e);
    console.log("LOGGED-IN-TABLE", this.state.loggedUser);

    // let isEditCopy = {
    //   no: parseInt(e.target.className) - 1,
    //   status: true,
    // };

    // let updateData = {
    //   //default DATA
    //   row: e.target.className,
    //   name: this.state.loggedUser.name,
    //   username: this.state.loggedUser.username,
    //   password: this.state.loggedUser.password,
    // };

    // this.setState({
    //   isEdit: isEditCopy,
    //   data: updateData,
    // });

    // this.props.onGoToEditForm(updateData);
    // console.log("Row-i:",e.target.parentElement.parentElement)
  };
  // delete = (id) => {
  //   const dataJson = this.props;
  //   console.log(id);
  // };
  render() {
    let h1 = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    const { dataJson, datas } = this.props;
    return (
      <>
        <Container>
          <Row>
            <Col>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Body>Your Login as {datas}</Card.Body>
              </Card>
              <h1 style={h1}>Data JSON</h1>
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
                  {dataJson.map((data, index) => (
                    <Tr key={data.id}>
                      <Td>{index + 1}</Td>
                      <Td>{data.name}</Td>
                      <Td>{data.username}</Td>
                      <Td>{data.email}</Td>
                      <Td>{data.password}</Td>
                      <Td>{data.address}</Td>
                      <Td colSpan="2">
                        {datas === data.email ? (
                          <Button
                            variant="secondary"
                            onClick={this.handleEdit(data.id)}
                          >
                            Edit
                          </Button>
                        ) : (
                          <Button variant="danger" onClick={this.delete}>
                            Delete
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default JsonPlaceholder;
