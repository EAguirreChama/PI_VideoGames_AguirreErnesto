import { GET_VIDEOGAMES } from "./ActionsGames/getVideoGames"
import { GET_VIDEOGAME_ID } from "./ActionsGames/getVideoGameId"
import { VIDEOGAMES_ORDER } from "./ActionsGames/filterVideoGames"
import { GET_GENRES } from "./ActionsGenres/getGenres"
import { GENRES_FILTER } from "./ActionsGenres/filterGenres"
import { GET_VIDEOGAMES_NAME } from "./ActionsGames/getVideoGameName"
import { ORIGIN_VIDEOGAMES } from "./ActionsGames/originVideoGames"
import { POST_VIDEOGAME } from "./ActionsGames/postVideoGame"
import { GET_PLATFORMS } from "./ActionsPlatforms/getPlatforms"
import { PLATFORMS_FILTER } from "./ActionsPlatforms/filterPlatforms"
import { RATING_VIDEOGAMES } from "./ActionsGames/filterRatingGames"

const initialState = {
    allVideoGames: [],
    videoGameDetail: {},
    allGenres: [],
    allPlatforms: [],
    copyAllGames: [],
    filteredVideoGames: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            if (action.payload) {
                return {
                    ...state,
                    allVideoGames: action.payload,
                    copyAllGames: action.payload
                };
            } else {
                return {
                    ...state,
                    allVideoGames: []
                }
            }
        case GET_VIDEOGAME_ID:
            return {
                ...state,
                videoGameDetail: action.payload
            }
        case GET_VIDEOGAMES_NAME:
            return {
                ...state,
                allVideoGames: action.payload
            }
        case VIDEOGAMES_ORDER:
            let order = action.payload === "Asc"
                ? state.copyAllGames.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0;
                })
                : state.copyAllGames.sort(function (a, b) {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                })
            return {
                ...state,
                allVideoGames: order.concat([])
            }
        case RATING_VIDEOGAMES:
            let rating = action.payload === "Asc"
                ? state.copyAllGames.sort(function (a, b) {
                    if (a.rating > b.rating) return 1;
                    if (b.rating > a.rating) return -1;
                    return 0;
                })
                : state.copyAllGames.sort(function (a, b) {
                    if (a.rating > b.rating) return -1;
                    if (b.rating > a.rating) return 1;
                    return 0;
                })
            return {
                ...state,
                allVideoGames: rating.concat([])
            }
        case ORIGIN_VIDEOGAMES:
            const origin = action.payload;
            let filteredVideoGames;

            if (origin === "API") {
                filteredVideoGames = state.copyAllGames.filter((game) => !isNaN(Number(game.id)));
            } else if (origin === "BD") {
                filteredVideoGames = state.copyAllGames.filter((game) => isNaN(Number(game.id)));
            } else {
                filteredVideoGames = state.copyAllGames;
            }
            return {
                ...state,
                allVideoGames:filteredVideoGames,
            }
        case GET_GENRES:
            return {
                ...state,
                allGenres: action.payload
            }
        case GENRES_FILTER:
            return {
                ...state,
                allVideoGames: action.payload
            }
        case GET_PLATFORMS:
            return {
                ...state,
                allPlatforms: action.payload
            }
        case PLATFORMS_FILTER:
            return {
                ...state,
                allVideoGames: action.payload
            }
        case POST_VIDEOGAME:
            return {
                ...state,
                allVideoGames: [action.payload, ...state.allVideoGames]
            }
        default:
            return { ...state }
    }
}

export default reducer
