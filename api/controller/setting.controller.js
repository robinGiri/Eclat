const router = require("express").Router();
const seasonService = require("../service/season.service");
router.put("/currentSeason/", async (req, res) => {
  const { seasonId } = parseInt(req.body);
  seasonService.setCurrentSeason(seasonId);
});

module.exports = router;
