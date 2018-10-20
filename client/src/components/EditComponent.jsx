import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchServerPortForEdit,
  editServerPort
} from "../redux/actions/serverPortActions";

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeHostName = this.onChangeHostName.bind(this);
    this.onChangePort = this.onChangePort.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    name: "",
    port: ""
  };

  componentDidMount() {
    this.props.fetchServerPortForEdit(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.serverPort) {
      this.setState({
        name: nextProps.serverPort.name,
        port: nextProps.serverPort.port
      });
    }
    if (nextProps.isEdited) {
      this.props.history.push("/");
    }
  }

  onChangeHostName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePort(e) {
    this.setState({
      port: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const editedServerPort = {
      name: this.state.name,
      port: this.state.port
    };
    this.props.editServerPort(this.props.match.params.id, editedServerPort);

    this.setState({
      name: "",
      port: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Edit New Server</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Host Name: </label>
            <input
              type="text"
              value={this.state.name}
              className="form-control"
              onChange={this.onChangeHostName}
            />
          </div>
          <div className="form-group">
            <label>Add Server Port: </label>
            <input
              type="text"
              value={this.state.port}
              className="form-control"
              onChange={this.onChangePort}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update server"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

EditComponent.propTypes = {
  fetchServerPortForEdit: PropTypes.func.isRequired,
  serverPort: PropTypes.object.isRequired,
  editServerPort: PropTypes.func.isRequired,
  isEdited: PropTypes.bool.isRequired
};

const mapStateToProps = storeState => ({
  serverPort: storeState.root.serverPort,
  isEdited: storeState.root.isEdited
});

export default connect(
  mapStateToProps,
  { fetchServerPortForEdit, editServerPort }
)(EditComponent);
