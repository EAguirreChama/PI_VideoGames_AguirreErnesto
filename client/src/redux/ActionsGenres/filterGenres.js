import axios from "axios";

export const GENRES_FILTER = "GENRES_FILTER"

export const genresFilter = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/genres/${id}`)
        const filter = apiData.data;
        dispatch({ type: GENRES_FILTER, payload: filter });
    };
};