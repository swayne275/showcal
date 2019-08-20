import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Show.css"

class Show extends Component {
  getRunningStr(running) {
    return (
      running ? 'Still running' : 'No upcoming episodes'
    );
  }

  render() {
    return (
      <div className="Show">
        <name>{this.props.name}</name>
        <running>{this.getRunningStr(this.props.running)}</running>
        <info>Runtime: {this.props.runtime} mins, ID: {this.props.id}</info>
      </div>
    );
    }
}

Show.propTypes = {
  name: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Show;