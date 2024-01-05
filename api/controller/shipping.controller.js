const express = require("express");
const shippingService = require("../service/shipping.service");

const router = express.Router();

// Read All Purchases
router.get("/", async (req, res, next) => {
  try {
    const shipping = await shippingService.getAllShipping();
    res.json({
      shipping,
      code: 200,
      message: "shipping retrieved successfully",
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

// get Shipping by ID
router.get("/:id", async (req, res, next) => {
  try {
    const shippingId = parseInt(req.params.id);
    const updatedShipping = await shippingService.getShippingById(shippingId);

    res.json({
      code: 200,
      message: "Shipping status updated successfully",
      meta: updatedShipping,
    });
  } catch (error) {
    next(error);
  }
});

//update status of shipping
router.put("/:id", async (req, res, next) => {
  try {
    const shippingId = parseInt(req.params.id);
    const { status } = req.body;
    const updatedShipping = await shippingService.updateShipping(
      shippingId,
      status
    );

    res.json({
      code: 200,
      shipping: updatedShipping,
      message: "Shipping status updated successfully",
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
