export const RATING_VIDEOGAMES = "RATING_VIDEOGAMES"
export const ratingVideoGames = (rating) => {
    return {
        type: RATING_VIDEOGAMES,
        payload: rating
    };
};
