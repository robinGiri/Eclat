const purchaseService = require("../service/purchase.service");
const shippingService = require("../service/shipping.service");

// Create Purchase
const createPurchase = async (req, res, next) => {
  try {
    const purchaseDetails = req.body;
    const { paymentmethod, OrderId, token } = purchaseDetails;
    console.log("orderId", OrderId);
    const { id } = await purchaseService.createPurchase(
      paymentmethod,
      OrderId,
      token
    );

    if (id) {
      const shipping = await shippingService.createShipping(OrderId, id);
      res.status(201).json({
        shipping,
        status: "successful",
      });
    }
  } catch (e) {
    next(e);
  }
};

// Get Purchase by ID
const getPurchaseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payment = await purchaseService.getPurchaseById(parseInt(id));

    if (payment) {
      res.status(200).json({
        purchase: payment,
        status: "successful",
      });
    }
  } catch (error) {
    next(error);
  }
};

// Get All Purchases
const getAllPurchases = async (req, res, next) => {
  try {
    const payment = await purchaseService.getAllPurchases();

    if (payment) {
      res.json({
        purchase: payment,
        status: "successful",
      });
    }
  } catch (error) {
    next(error);
  }
};

// Get Total Purchases Per Month
const getTotalPurchasePerMonth = async (req, res, next) => {
  try {
    const purchase = await purchaseService.getTotalPurchasePerMonth();

    if (purchase) {
      res.json({
        purchase,
        status: "successful",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPurchase,
  getPurchaseById,
  getAllPurchases,
  getTotalPurchasePerMonth,
};
