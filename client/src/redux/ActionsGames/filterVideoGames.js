export const VIDEOGAMES_ORDER = "VIDEOGAMES_ORDER"

export const videoGamesOrder = (filter) => {
    return {
        type: VIDEOGAMES_ORDER,
        payload: filter
    };
};