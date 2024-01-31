const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function createOrder(data) {
  try {
    const createdOrder = await prisma.order.create({
      data,
    });
    return createdOrder;
  } catch (error) {
    throw error;
  }
}

async function getOrderById(orderId) {
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { OrderItems: true },
    });
    return order;
  } catch (error) {
    throw error;
  }
}

async function getOrderBycustomerId(customerId) {
  try {
    const order = await prisma.order.findMany({
      where: { customerId: customerId },
      include: { OrderItems: { include: { product: true } }, Voucher: true },
    });
    return order;
  } catch (error) {
    throw error;
  }
}

async function updateOrder(orderId, updatedData) {
  try {
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: updatedData,
    });
    return updatedOrder;
  } catch (error) {
    throw error;
  }
}

async function deleteOrder(orderId) {
  try {
    const deletedOrder = await prisma.order.delete({
      where: { id: orderId },
    });
    return deletedOrder;
  } catch (error) {
    throw error;
  }
}

async function getTotalOrderPerMonth(year, month) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59, 999);

  const totalOrder = await prisma.order.count({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  return totalOrder;
}

module.exports = {
  createOrder,
  getOrderById,
  getOrderBycustomerId,
  updateOrder,
  deleteOrder,
  getTotalOrderPerMonth,
};
