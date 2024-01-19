const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create ReturnedOrder
async function createReturnedOrder(productId, orderId) {
  try {
    const createdReturnedOrder = await prisma.returnedOrder.create({
      data: {
        productId,
        orderId,
      },
    });
    return createdReturnedOrder;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Read ReturnedOrder by ID
async function getReturnedOrderById(returnedOrderId) {
  try {
    const returnedOrder = await prisma.returnedOrder.findUnique({
      where: { id: returnedOrderId },
      include: {
        Product: true,
        Order: true,
      },
    });
    return returnedOrder;
  } catch (error) {
    throw error;
  }
}

async function getReturnedAllOrder() {
  try {
    const returnedOrder = await prisma.returnedOrder.findMany({
      include: {
        Product: true,
        Order: true,
      },
    });
    return returnedOrder;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createReturnedOrder,
  getReturnedOrderById,
  getReturnedAllOrder,
};
