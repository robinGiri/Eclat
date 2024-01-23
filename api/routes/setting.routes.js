const express = require("express");
const settingController = require("../controller/setting.controller");

const router = express.Router();

// Set Current Season
router.post("/currentSeason/", settingController.setCurrentSeason);

// Get Current Season
router.get("/currentSeason", settingController.getCurrentSeason);

module.exports = router;
