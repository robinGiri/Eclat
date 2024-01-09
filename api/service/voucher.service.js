const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const include = {
  Product: true,
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

// Update Voucher
async function updateVoucher(voucherId, updatedData) {
  try {
    const updatedVoucher = await prisma.voucher.update({
      where: { id: voucherId },
      data: updatedData,
    });
    return updatedVoucher;
  } catch (error) {
    throw error;
  }
}

// Delete Voucher by ID
async function deleteVoucher(voucherId) {
  try {
    const deletedVoucher = await prisma.voucher.delete({
      where: { id: voucherId },
    });
    return deletedVoucher;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createVoucher,
  getVoucherById,
  updateVoucher,
  deleteVoucher,
};
