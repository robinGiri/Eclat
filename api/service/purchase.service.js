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

async function getTotalPurchasePerMonth(year, month) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59, 999);

  const totalPurchase = await prisma.purchase.aggregate({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    _sum: {
      amount: true,
    },
  });

  return totalPurchase._sum.amount || 0;
}

module.exports = {
  createPurchase,
  getAllPurchases,
  getPurchaseById,
  deletePurchase,
  getTotalPurchasePerMonth,
};
