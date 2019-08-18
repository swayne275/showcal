import React from "react";
import PropTypes from "prop-types";
import "./Show.css"

function Show(props) {
    return (
        <div className="Show">
            <name>{props.name}</name>
            <running>{getRunningStr(props.running)}</running>
            <info>Runtime: {props.runtime} mins, ID: {props.id}</info>
        </div>
    )
}

function getRunningStr(running) {
    return (
        running ? 'Still running' : 'No upcoming episodes'
    );
}

Show.propTypes = {
    name: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    running: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};

export default Show;