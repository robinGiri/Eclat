const express = require("express");
const returnController = require("../controller/return.controller");

const router = express.Router();

router.post("/", returnController.createReturnedOrder);
router.get("/:id", returnController.getReturnedOrderById);

module.exports = router;
