const router = require("express").Router();
const voucherService = require("../service/voucher.service");

router.post("/", async (req, res, next) => {
  try {
    const { discountPercent } = req.body;
    const voucher = await voucherService.createVoucher(discountPercent);
    res.json({
      code: 201,
      result: voucher,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allVouchers = await voucherService.getAllVoucher();
    res.status(200).json({
      code: 200,
      result: allVouchers,
      meta: null,
    });
  } catch (error) {
    next(error);
  }

  router.get("/:id", async (req, res, next) => {
    try {
      const voucher = await voucherService.getVoucherById(req.params.id);
      res.status(200).json({
        code: 200,
        result: voucher,
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  });
});

router.delete("/:id", async (req, res, next) => {
  try {
    const voucher = await voucherService.deleteVoucherById(req.params.id);
    res.status(200).json({
      code: 200,
      result: voucher,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
