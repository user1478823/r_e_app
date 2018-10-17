import React, { Component } from "react";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get("http://localhost:5000/serverport/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.port}</td>
        <td>
          <a href={"edit/" + this.props.obj._id} className="btn btn-primary">
            Edit
          </a>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
