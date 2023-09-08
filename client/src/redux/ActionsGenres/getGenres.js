import axios from "axios"

export const GET_GENRES = "GET_GENRES"
export const getGenres = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/genres")
        const genres = apiData.data;
            dispatch({ type: GET_GENRES , payload: genres})
    };
};
