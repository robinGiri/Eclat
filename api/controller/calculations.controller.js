const express = require("express");
const purchaseService = require("../service/purchase.service");
const router = express.Router();

router.get("/total-income", async (req, res, next) => {
  let total = 0;
  const purchases = await purchaseService.getAllPurchases();
  purchases.map((purchase) => {
    total = purchase.amount;
  });
  res.json({
    total: total,
    meta: null,
  });
});

module.exports = router;
