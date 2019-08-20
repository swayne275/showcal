import React, { Component } from "react";
import "./ShowSearch.scss";

class ShowSearch extends Component {
  render() {
    return (
      <div className="ShowSearch">
        <input onKeyDown={this.props.send} />
      </div>
    );
  }
}

export default ShowSearch;