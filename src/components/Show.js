import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Show.css"

function Show(props) {
    return (
        <div className="show">
            <name>{props.name}</name>
            <type>Show still running: {props.running}</type>
            <content>Runtime: {props.runtime} mins, ID: {props.id}</content>
        </div>
    )
}

Show.propTypes = {
    name: PropTypes.string.isRequired,
    runtime: PropsTypes.number.isRequired,
    runtime: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};

export default Show;