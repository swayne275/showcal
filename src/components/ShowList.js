import React from "react";

import Show from "./Show";

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