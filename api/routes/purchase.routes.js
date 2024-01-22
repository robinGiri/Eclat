const router = require("express").Router();
const purchaseController = require("../controller/purchase.controller");

router.post("/", purchaseController.createPurchase);

router.get("/:id", purchaseController.getPurchaseById);

router.get("/", purchaseController.getAllPurchases);

router.get("/all-year-purchase", purchaseController.getTotalPurchasePerMonth);

module.exports = router;
