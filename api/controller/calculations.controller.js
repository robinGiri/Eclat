const purchaseService = require("../service/purchase.service");
const returnService = require("../service/returned.product.Service");
const express = require("express");
const router = express.Router();

router.get("/total-income", async (req, res, next) => {
  let total = 0;
  const purchases = await purchaseService.getAllPurchases();
  purchases.map((purchase) => {
    total += purchase.amount;
  });
  res.json({
    total: total,
    meta: null,
  });
});

router.get("/total-return", async (req, res, next) => {
  const returnData = await returnService.getReturnedAllOrder();
  const OrderByMonth = res.json({
    total_returned: returnData.length,
    meta: null,
  });
});

module.exports = router;
