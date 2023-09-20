import axios from "axios"

export const PLATFORMS_FILTER = "PLATFORMS_FILTER"

export const platformsFilter = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/platforms/${id}`)
        const filter = apiData.data
        dispatch({ type: PLATFORMS_FILTER, payload: filter})
    }
}
