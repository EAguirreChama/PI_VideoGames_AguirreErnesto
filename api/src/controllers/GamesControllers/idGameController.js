const idByBd  = require ("../../helpers/idController/idByBd")
const idByApi = require ("../../helpers/idController/idByApi")

const idGameController = async (id) => {
    if (!isNaN(+id)) {
        return await idByApi(id)
    } else {
        return await idByBd(id)
    }

};

module.exports = idGameController