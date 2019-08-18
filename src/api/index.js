import axios from "axios";

var showSearchURL = 'http://localhost:8080/api/v1/showsearch';

let getMatchingShows = (query) => {
    console.log("Getting matching shows for query:", query);

    return new Promise((resolve, reject) => {
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
                const shows = data.shows;
                Object.keys(shows).forEach(function(key) {
                    let show = shows[key];
                    if (('name' in show) &&
                        ('id' in show) &&
                        ('runtime' in show) &&
                        ('status' in show)) {
                        if (show.status === true) {
                            // only display shows still known to be running
                            formattedShows.push({
                                name: show.name,
                                runtime: show.runtime,
                                running: show.status,
                                id: show.id,
                            });
                        }
                    } else {
                        console.log("Show missing required parameters:", show)
                    }
                });
            }

            resolve(formattedShows);
        }, (error) => {
            console.log('Network request failed: ', error);
            if (error.response) {
                console.log("data: ", error.response.data)
                console.log("status: ", error.response.status)
                console.log("headers: ", error.response.headers)
            }
            reject([])
        })
    });
}

export { getMatchingShows }