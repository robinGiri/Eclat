const router = require("express").Router();
const purchaseService = require("../service/purchase.service");
const paymentService = require("../service/purchase.service");
const shippingService = require("../service/shipping.service");

router.post("/", async (req, res, next) => {
  try {
    const purchaseDetails = req.body;
    const { paymentmethod, OrderId, token } = purchaseDetails;
    const { id } = await purchaseService.createPurchase(
      paymentmethod,
      OrderId,
      token
    );
    if (id) {
      const shipping = await shippingService.createShipping(OrderId, id);
      res.status(201).json({
        shipping: shipping,
        status: "successful",
      });
    }
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const payment = await paymentService.getPurchaseById(parseInt(id));
    if (payment) {
      res.status(200).json({
        purchase: payment,
        status: "successful",
      });
    }
  } catch (error) {
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const payment = await paymentService.getAllPurchases();
    if (payment) {
      res.json({
        purchase: payment,
        status: "successful",
      });
    }
  } catch (error) {
    next(error);
  }
});
router.get("/all-year-purchase", async (req, res, next) => {
  try {
    const purchase = await paymentService.getTotalPurchasePerMonth();
    if (purchase) {
      res.json({
        purchase: purchase,
        status: "successful",
      });
    }
  } catch (error) {}
});

module.exports = router;
