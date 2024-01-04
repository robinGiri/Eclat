const router = require("express").Router();
const productService = require("../service/product.service");
const seasonService = require("../service/season.service");
router.get("/", async (req, res, next) => {
  const currentSeason = seasonService.getCurrentSeason();
  console.log(currentSeason);
});

module.exports = router;
