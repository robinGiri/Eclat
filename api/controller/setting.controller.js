const router = require("express").Router();
const settingService = require("../service/setting.service");
router.post("/currentSeason/", async (req, res, next) => {
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
});
router.get("/currentSeason", async (req, res, next) => {
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
});

module.exports = router;
