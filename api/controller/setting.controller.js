const settingService = require("../service/setting.service");

const setCurrentSeason = async (req, res, next) => {
  try {
    const { seasonId } = req.body;
    const currentSeason = await settingService.createOrUpdateSetting(seasonId);
    res.json({
      season: seasonId,
      code: 201, // 201 Created
      meta: null,
    });
  } catch (e) {
    next(e);
  }
};

const getCurrentSeason = async (req, res, next) => {
  try {
    const currentSeason = await settingService.getSetting();
    res.json({
      season: currentSeason,
      code: 201, // 201 Created
      meta: null,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  setCurrentSeason,
  getCurrentSeason,
};
