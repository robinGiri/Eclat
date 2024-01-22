const express = require("express");
const shippingController = require("../controller/shipping.controller");

const router = express.Router();

// Read All Shipping
router.get("/", shippingController.getAllShipping);

// Get Shipping by ID
router.get("/:id", shippingController.getShippingById);

// Update Status of Shipping
router.put("/:id", shippingController.updateShipping);

module.exports = router;
