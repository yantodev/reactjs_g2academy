import React, { Component } from "react";
import ListUser from "../../component/user/ListUsers";
// import FilterUsers from "../../component/user/FilterUsers";

class UserList extends Component {
  render() {
    return (
      <>
        {/* <FilterUsers /> */}
        <h1>Ini User List</h1>
        <ListUser />
      </>
    );
  }
}

export default UserList;
