import React, { Component } from "react";
import axios from "axios";

export default class CreateComponent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const inputs = e.target.getElementsByTagName("input");
    const serverport = {
      name: inputs.hostName.value,
      port: inputs.serverPort.value
    };
    axios
      .post("http://localhost:5000/serverport/add", serverport)
      .then(res => console.log(res.data));
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
