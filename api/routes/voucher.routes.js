const express = require("express");
const voucherController = require("../controller/voucher.controller");

const router = express.Router();

// Create Voucher
router.post("/", voucherController.createVoucher);

// Read All Vouchers
router.get("/", voucherController.getAllVouchers);

// Read Voucher by ID
router.get("/:id", voucherController.getVoucherById);

// Delete Voucher by ID
router.delete("/:id", voucherController.deleteVoucherById);

module.exports = router;
