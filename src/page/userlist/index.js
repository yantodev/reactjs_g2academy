import React, { Component } from "react";
import ListUser from "../../component/user/ListUsers";
// import FilterUsers from "../../component/user/FilterUsers";

class UserList extends Component {
  render() {
    let h1 = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    return (
      <>
        <div className="container">
          {/* <FilterUsers /> */}
          <h1 style={h1}>Daftar User</h1>
          <ListUser />
        </div>
      </>
    );
  }
}

export default UserList;
