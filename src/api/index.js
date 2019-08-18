import axios from "axios";

var showSearchURL = 'http://localhost:8080/api/v1/showsearch';

let getMatchingShows = (query) => {
    console.log("Getting matching shows for query: ", query);

    axios.get(showSearchURL,
        {
            params: {
                query: query
            }
        })
    .then(response => {
        const data = response.data;
        const formattedShows = [];

        if (data.shows) {
            console.log("Show data: ", data.shows)

            const shows = data.shows;
            Object.keys(shows).forEach(function(key) {
                let show = shows[key];
                if (show.name && show.id && show.runtime && show.status) {
                    formattedShows.push({
                        name: show.name,
                        runtime: show.runtime,
                        running: show.status,
                        id: show.id,
                    });
                }
            });
        }
    })
    .catch(error => {
        console.log('Network request failed: ', error);
        if (error.response) {
            console.log("data: ", error.response.data)
            console.log("status: ", error.response.status)
            console.log("headers: ", error.response.headers)
        }
    })
}

export { getMatchingShows }