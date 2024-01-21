const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const include = {
  Order: true,
};

// Create Voucher
async function createVoucher(discountPercent) {
  try {
    const createdVoucher = await prisma.voucher.create({
      data: { discountPercent },
    });
    return createdVoucher;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Read Voucher by ID
async function deleteVoucherById(voucherId) {
  try {
    const voucher = await prisma.voucher.delete({
      where: { id: voucherId },
    });
    return voucher;
  } catch (error) {
    throw error;
  }
}
// Read Voucher by ID
async function getVoucherById(voucherId) {
  try {
    const voucher = await prisma.voucher.findUnique({
      where: { id: voucherId },
      include,
    });
    return voucher;
  } catch (error) {
    throw error;
  }
}
// Read All Voucher
async function getAllVoucher() {
  try {
    const voucher = await prisma.voucher.findMany({
      include,
    });
    return voucher;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createVoucher,
  getVoucherById,
  getAllVoucher,
  deleteVoucherById,
};
