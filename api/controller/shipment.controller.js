// controllers/shipmentController.js
const express = require("express");
const router = express.Router();
const shipmentService = require("../services/shipmentService");

// Create a new shipment
router.post("/", async (req, res) => {
  try {
    const { orderId, shipmentStatus, trackingNumber } = req.body;

    const newShipment = await shipmentService.createShipment(
      orderId,
      shipmentStatus,
      trackingNumber
    );

    res.json({
      code: 200,
      message: "Shipment created successfully",
      meta: newShipment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      meta: null,
    });
  }
});

// Get shipment by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const shipment = await shipmentService.getShipmentById(id);

    if (!shipment) {
      return res.status(404).json({
        code: 404,
        message: "Shipment not found",
        meta: null,
      });
    }

    res.json({
      code: 200,
      message: "Shipment fetched successfully",
      meta: shipment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      meta: null,
    });
  }
});

// Update shipment by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedShipment = await shipmentService.updateShipment(id, updates);

    res.json({
      code: 200,
      message: "Shipment updated successfully",
      meta: updatedShipment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      meta: null,
    });
  }
});

// Delete shipment by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedShipment = await shipmentService.deleteShipment(id);

    res.json({
      code: 200,
      message: "Shipment deleted successfully",
      meta: deletedShipment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      meta: null,
    });
  }
});

module.exports = router;
