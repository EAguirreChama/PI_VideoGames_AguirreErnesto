const getPlatFilterController = require("../../controllers/PlatformsController/getPlatformsIdController");

const getPlatFilterHandler = async (req , res) => {
    try {
        const { id } = req.params
        
        const allPlatforms = await getPlatFilterController(id)
        
        return res.status(200).json(allPlatforms)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = getPlatFilterHandler;
