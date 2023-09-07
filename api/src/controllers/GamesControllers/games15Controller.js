const gamesName = require ("../../helpers/gamesName")

const games15Controller = async (name) => {
    const games = await gamesName(name)
    if(games.length) return games.slice(0, 15)
    else throw Error ("No se encuentra el VideoGame con ese nombre")
};
module.exports = games15Controller
