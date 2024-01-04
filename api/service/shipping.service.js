const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ShippingService {
  // Include related models
  include = {
    Order: {
      include: {
        customer: true,
        OrderItems: {
          include: {
            product: {
              include: {
                images: true, // Include images for each product
              },
            },
          },
        },
        Purchase: true,
      },
    },
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

  //Read All shipping
  async getAllShipping() {
    try {
      const shipping = await prisma.shipping.findMany({
        include: this.include,
      });
      return shipping;
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
