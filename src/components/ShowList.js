import React from "react";
// TODO make these into tiles instead of just bars/rows
import Show from "./Show/Show";

function ShowList(props) {
    return (
        <div>
            {props.shows.map(s => <Show
                name={s.name}
                runtime={s.runtime}
                running={s.running}
                id={s.id}
            />)}
        </div>
    );
}

export default ShowList