import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteServerPort } from "../redux/actions/serverPortActions";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    this.props.deleteServerPort(this.props.obj._id);
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

TableRow.propTypes = {
  deleteServerPort: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteServerPort }
)(TableRow);
