const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create ReturnedOrder
async function createReturnedOrder(productId, orderId, amount) {
  try {
    const createdReturnedOrder = await prisma.returnedOrder.create({
      data: {
        productId,
        orderId,
        amount,
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

// Update ReturnedOrder
async function updateReturnedOrder(returnedOrderId, updatedData) {
  try {
    const updatedReturnedOrder = await prisma.returnedOrder.update({
      where: { id: returnedOrderId },
      data: updatedData,
    });
    return updatedReturnedOrder;
  } catch (error) {
    throw error;
  }
}

// Delete ReturnedOrder by ID
async function deleteReturnedOrder(returnedOrderId) {
  try {
    const deletedReturnedOrder = await prisma.returnedOrder.delete({
      where: { id: returnedOrderId },
    });
    return deletedReturnedOrder;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createReturnedOrder,
  getReturnedOrderById,
  updateReturnedOrder,
  deleteReturnedOrder,
};
