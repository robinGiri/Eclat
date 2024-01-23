const seasonService = require("../service/season.service");

const createSeason = async (req, res, next) => {
  try {
    const { name } = req.body;
    const createdSeason = await seasonService.createSeason(name);
    res.json({
      season: createdSeason,
      code: 201, // 201 Created
      meta: null,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllSeasons = async (req, res, next) => {
  try {
    const seasons = await seasonService.getAllSeasons();
    res.json({
      seasons,
      code: 200, // 200 OK
      meta: null,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSeasonById = async (req, res, next) => {
  try {
    const seasonId = parseInt(req.params.id);
    const season = await seasonService.getSeasonById(seasonId);
    if (!season) {
      res.status(404).json({
        code: 404, // 404 Not Found
        message: "Season not found",
        meta: null,
      });
    } else {
      res.json({
        season,
        code: 200, // 200 OK
        meta: null,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateSeason = async (req, res, next) => {
  try {
    const seasonId = parseInt(req.params.id);
    const { name } = req.body;
    const updatedSeason = await seasonService.updateSeason(seasonId, { name });
    res.json({
      season: updatedSeason,
      code: 200, // 200 OK
      meta: null,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteSeason = async (req, res, next) => {
  try {
    const seasonId = parseInt(req.params.id);
    const deletedSeason = await seasonService.deleteSeason(seasonId);
    if (!deletedSeason) {
      res.status(404).json({
        code: 404, // 404 Not Found
        message: "Season not found",
        meta: null,
      });
    } else {
      res.json({
        season: deletedSeason,
        code: 200, // 200 OK
        meta: null,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createSeason,
  getAllSeasons,
  getSeasonById,
  updateSeason,
  deleteSeason,
};
