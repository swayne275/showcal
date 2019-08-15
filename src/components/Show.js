import React from "react";
import PropTypes from "prop-types";
import "./Show.css"

function Show(props) {
    return (
        <div className="show">
            <name>{props.name}</name>
            <running>Show still running: {props.running}</running>
            <info>Runtime: {props.runtime} mins, ID: {props.id}</info>
        </div>
    )
}

Show.propTypes = {
    name: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    running: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};

export default Show;