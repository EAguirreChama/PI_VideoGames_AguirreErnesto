import axios from "axios"

export const GET_PLATFORMS = "GET_PLATFORMS"

export const getPlatforms = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/platforms")
        const platforms = apiData.data
            dispatch({ type: GET_PLATFORMS , payload: platforms})
    }
}
