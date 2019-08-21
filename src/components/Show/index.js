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
    const {name, id, running, runtime} = this.props.show
    return (
      <div className="Show">
        <name>{name}</name>
        <running>{this.getRunningStr(running)}</running>
        <info>Runtime: {runtime} mins, ID: {id}</info>
      </div>
    );
  }
}

Show.propTypes = {
  show: PropTypes.object.isRequired,
};

export default Show;