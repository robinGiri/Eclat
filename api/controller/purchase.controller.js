const router = require("express").Router();
const purchaseService = require("../service/purchase.service");
const paymentService = require("../service/purchase.service");

router.post("/", async (req, res, next) => {
  try {
    const purchaseDetails = req.body;
    const { paymentmethod, OrderId } = purchaseDetails;
    const purchase = await purchaseService.createPurchase(
      paymentmethod,
      OrderId
    );
    if (purchase) {
      res.json({
        purchase: purchase,
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
      res.json({
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

module.exports = router;
