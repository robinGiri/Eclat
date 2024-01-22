const express = require("express");
const seasonController = require("../controller/season.controller");

const router = express.Router();

// Create Season
router.post("/", seasonController.createSeason);

// Read All Seasons
router.get("/", seasonController.getAllSeasons);

// Read Season by ID
router.get("/:id", seasonController.getSeasonById);

// Update Season by ID
router.put("/:id", seasonController.updateSeason);

// Delete Season by ID
router.delete("/:id", seasonController.deleteSeason);

module.exports = router;
