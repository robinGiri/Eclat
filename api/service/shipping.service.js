const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ShippingService {
  // Include related models
  include = {
    Order: {
      select: {
        id: true,
        total: true,
        userId: true,
        customer: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        OrderItems: {
          select: {
            id: true,
            productId: true,
            quantity: true,
            product: {
              select: {
                id: true,
                name: true,
                afterdiscount: true, // Include afterdiscount field
                images: true,
              },
            },
          },
        },
      },
    },
    Purchase: true,
  };

  // Create Shipping
  async createShipping(orderId, purchaseId) {
    try {
      const createdShipping = await prisma.shipping.create({
        data: {
          OrderId: orderId,
          purchaseId: purchaseId,
        },
        include: this.include,
      });
      return createdShipping;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Read Shipping by ID
  async getShippingById(shippingId) {
    try {
      const shipping = await prisma.shipping.findUnique({
        where: { id: shippingId },
        include: this.include,
      });
      return shipping;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Read All Shipping
  async getAllShipping() {
    try {
      const shippingList = await prisma.shipping.findMany({
        include: this.include,
      });
      return shippingList;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Update Shipping
  async updateShipping(shippingId, status) {
    try {
      const updatedShipping = await prisma.shipping.update({
        where: { id: shippingId },
        data: { status: status },
        include: this.include,
      });
      return updatedShipping;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const shippingService = new ShippingService();

module.exports = shippingService;
