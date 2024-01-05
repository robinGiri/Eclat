const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createPurchase(paymentmethod, orderId, token) {
  try {
    const createdPurchase = await prisma.purchase.create({
      data: {
        paymentmethod: paymentmethod,
        OrderId: orderId,
        token: token,
      },
      include: { Order: true },
    });
    return createdPurchase;
  } catch (error) {
    throw error;
  }
}

async function getAllPurchases() {
  try {
    const purchases = await prisma.purchase.findMany();
    return purchases;
  } catch (error) {
    throw error;
  }
}

async function getPurchaseById(purchaseId) {
  try {
    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId },
    });
    return purchase;
  } catch (error) {
    throw error;
  }
}

async function deletePurchase(purchaseId) {
  try {
    const deletedPurchase = await prisma.purchase.delete({
      where: { id: purchaseId },
    });
    return deletedPurchase;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createPurchase,
  getAllPurchases,
  getPurchaseById,
  deletePurchase,
};
