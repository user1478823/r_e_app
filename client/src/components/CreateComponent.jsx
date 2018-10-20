import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createServerPort } from "../redux/actions/serverPortActions";

class CreateComponent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAdded) {
      this.props.history.push("/");
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const inputs = e.target.getElementsByTagName("input");
    const serverport = {
      name: inputs.hostName.value,
      port: inputs.serverPort.value
    };
    this.props.createServerPort(serverport);
    this.setState({
      name: "",
      port: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Add New Server</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Host Name: </label>
            <input name="hostName" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Add Server Port: </label>
            <input name="serverPort" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Node server"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

CreateComponent.propTypes = {
  createServerPort: PropTypes.func.isRequired,
  isAdded: PropTypes.bool.isRequired
};

const mapStateToProps = storeState => ({
  isAdded: storeState.root.isAdded
});

export default connect(
  mapStateToProps,
  { createServerPort }
)(CreateComponent);
