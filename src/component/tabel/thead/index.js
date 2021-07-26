import React, { Component } from "react";
class Thead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const children = this.props;
    return (
      <>
        <thead>
          {/* {children} */}
          <tr>
            <th>No</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
      </>
    );
  }
}

export default Thead;
