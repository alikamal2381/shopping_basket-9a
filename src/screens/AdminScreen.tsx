import React, { Component } from "react";
import Orders from "../components/Orders";

export default class AdminScreen extends Component {
  render() {
    return (
      <div>
        <h1>Admin Order List</h1>
        <Orders />
      </div>
    );
  }
}
