const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class PurchaseService {
  include = {
    Order: true,
  };
  // Create Purchase
  async createPurchase(paymentmethod, orderId, token) {
    try {
      const createdPurchase = await prisma.purchase.create({
        data: {
          paymentmethod: paymentmethod,
          OrderId: orderId,
          token: token,
        },
        include: this.include,
      });
      return createdPurchase;
    } catch (error) {
      throw error;
    }
  }

  // Read All Purchases
  async getAllPurchases() {
    try {
      const purchases = await prisma.purchase.findMany();
      return purchases;
    } catch (error) {
      throw error;
    }
  }

  // Read Purchase by ID
  async getPurchaseById(purchaseId) {
    try {
      const purchase = await prisma.purchase.findUnique({
        where: { id: purchaseId },
      });
      return purchase;
    } catch (error) {
      throw error;
    }
  }

  // Delete Purchase by ID
  async deletePurchase(purchaseId) {
    try {
      const deletedPurchase = await prisma.purchase.delete({
        where: { id: purchaseId },
      });
      return deletedPurchase;
    } catch (error) {
      throw error;
    }
  }
}

const purchaseService = new PurchaseService();

module.exports = purchaseService;
