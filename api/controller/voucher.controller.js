const voucherService = require("../service/voucher.service");

const createVoucher = async (req, res, next) => {
  try {
    const { discountPercent } = req.body;
    const voucher = await voucherService.createVoucher(
      parseInt(discountPercent)
    );
    res.json({
      code: 201,
      result: voucher,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
};

const getAllVouchers = async (req, res, next) => {
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
};

const getVoucherById = async (req, res, next) => {
  try {
    const voucher = await voucherService.getVoucherById(
      parseInt(req.params.id)
    );
    res.status(200).json({
      code: 200,
      result: voucher,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
};

const deleteVoucherById = async (req, res, next) => {
  try {
    const voucher = await voucherService.deleteVoucherById(
      parseInt(req.params.id)
    );
    res.status(200).json({
      code: 200,
      result: voucher,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createVoucher,
  getAllVouchers,
  getVoucherById,
  deleteVoucherById,
};
