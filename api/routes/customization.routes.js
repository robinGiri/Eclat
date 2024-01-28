const controller = require("../controller/customization.controller");
const express = require("express");
const router = express.Router();

router.get("/", controller.add);

module.exports = router