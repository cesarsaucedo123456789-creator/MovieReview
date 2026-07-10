import axios from "axios";

const API_KEY = "e2c29b07";

const OMDB_URL = "https://www.omdbapi.com/";

export const searchMovie = (query) => {
    const trimmedQuery = query.trim();

    const params = {
        apikey: API_KEY,
    };

    if (/^tt\d{7,}$/.test(trimmedQuery)) {
        params.i = trimmedQuery;
    } else {
        params.t = trimmedQuery;
    }

    return axios.get(OMDB_URL, { params });
};
