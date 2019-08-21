import axios from "axios";

const API_URL = 'http://localhost:8080'
const API_VERSION = 'v1'
const SHOW_SEARCH_URL = `${API_URL}/api/${API_VERSION}/showsearch`;

const getMatchingShows = async (query) => {
    console.log("Getting matching shows for query:", query);

    try {
        const response = await axios.get(SHOW_SEARCH_URL,
            {
                params: {
                    query: query
                }
            }
        )

        const data = response.data;
        const formattedShows = [];

        if (data.shows) {
            const {shows} = data;
            Object.keys(shows).forEach((key) => {
                let show = shows[key];
                if (('name' in show) &&
                    ('id' in show) &&
                    ('status' in show)) {
                    if (show.status === true) {
                        // only display shows still known to be running
                        formattedShows.push(show);
                    }
                } else {
                    console.log("Show missing required parameters:", show)
                }
            });
        }

        return formattedShows;
    }
    catch (error) {
        console.log('Network request failed: ', error);
        if (error.response) {
            console.log("data: ", error.response.data)
            console.log("status: ", error.response.status)
            console.log("headers: ", error.response.headers)
        }
        return []
    }
}

export { getMatchingShows }