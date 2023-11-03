export const ORIGIN_VIDEOGAMES = "ORIGIN_VIDEOGAMES"

export const originVideoGames = (origin) => {
    return {
        type: ORIGIN_VIDEOGAMES,
        payload: origin
    }
}
