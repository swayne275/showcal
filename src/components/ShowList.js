import React from "react";
// TODO make these into tiles instead of just bars/rows
import Show from "./Show";

function ShowList(props) {
  return (
    <div>
      {props.shows.map(s =>
        <Show show={s}/>
      )}
    </div>
  );
}

export default ShowList