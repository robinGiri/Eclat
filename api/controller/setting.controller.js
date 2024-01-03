const router = require("express").Router();
const settingService = require("../service/setting.service");
router.post("/currentSeason/", async (req, res) => {
  const { seasonId } = req.body;

  const currentSeason = await settingService.createOrUpdateSetting(seasonId);
  res.json({
    season: currentSeason,
    code: 201, // 201 Created
    meta: null,
  });
  router.get("/currentSeason", async (req, res) => {
    const currentSeason = await settingService.getSetting();
    res.json({
      season: currentSeason,
      code: 201, // 201 Created
      meta: null,
    });
  });
});

module.exports = router;
