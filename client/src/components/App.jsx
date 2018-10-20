import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchServerPorts } from "../redux/actions/serverPortActions";
import TableRow from "./TableRow";

class App extends Component {
  //did better than will for async calls
  componentDidMount() {
    this.props.fetchServerPorts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isDeleted) {
      this.props.fetchServerPorts();
    }
  }
  tabRow() {
    return this.props.serverPorts.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Port</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

App.propTypes = {
  fetchServerPorts: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired
};

const mapStateToProps = storeState => ({
  serverPorts: storeState.root.serverPorts,
  isDeleted: storeState.root.isDeleted
});

export default connect(
  mapStateToProps,
  { fetchServerPorts }
)(App);
