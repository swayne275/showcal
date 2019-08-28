import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import "./Show.css"

// TODO don't use => fcn in render for efficiency reasons
// TODO get history properly pushed

class Show extends Component {
  getRunningStr(running) {
    return (
      running ? 'Still running' : 'No upcoming episodes'
    );
  }

  redirectToTarget = (uri) => {
    console.log(`/show/${uri}`)
    //this.props.history.push(`/show/${uri}`)
  }

  render() {
    const {name, id, running} = this.props.show
    return (
      <div className="Show">
        <name>{name}</name>
        <running>{this.getRunningStr(running)}</running>
        <info>ID: {id}</info>
        <Link to={`/show/${id}`}>
          <button
            value={id}
            onClick={() => this.redirectToTarget(id)}
          >
            Select {id}
          </button>
        </Link>
      </div>
    );
  }
}

Show.propTypes = {
  show: PropTypes.object.isRequired,
};

export default Show;