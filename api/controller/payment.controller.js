// controllers/paymentController.js
const express = require("express");
const router = express.Router();
const paymentService = require("../services/paymentService");

// Create a new payment
router.post("/", async (req, res) => {
  try {
    const { orderId, amount, paymentStatus, paymentToken } = req.body;

    const newPayment = await paymentService.createPayment(
      orderId,
      amount,
      paymentStatus,
      paymentToken
    );

    res.json({
      code: 200,
      message: "Payment created successfully",
      meta: newPayment,
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

// Get payment by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const payment = await paymentService.getPaymentById(id);

    if (!payment) {
      return res.status(404).json({
        code: 404,
        message: "Payment not found",
        meta: null,
      });
    }

    res.json({
      code: 200,
      message: "Payment fetched successfully",
      meta: payment,
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

// Update payment by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedPayment = await paymentService.updatePayment(id, updates);

    res.json({
      code: 200,
      message: "Payment updated successfully",
      meta: updatedPayment,
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

// Delete payment by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPayment = await paymentService.deletePayment(id);

    res.json({
      code: 200,
      message: "Payment deleted successfully",
      meta: deletedPayment,
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
