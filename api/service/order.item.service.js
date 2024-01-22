const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createOrderItem = async (orderId, productId, quantity) => {
  try {
    const createdOrderItem = await prisma.orderItems.create({
      data: {
        OrderId: orderId,
        productId: productId,
        quantity: quantity,
      },
    });

    return createdOrderItem;
  } catch (error) {
    throw error;
  }
};

const getOrderItemById = async (orderItemId) => {
  try {
    const orderItem = await prisma.orderItems.findUnique({
      where: { id: orderItemId },
      include: { product: true, Order: true },
    });
    return orderItem;
  } catch (error) {
    throw error;
  }
};

const updateOrderItem = async (orderItemId, updatedData) => {
  try {
    const updatedOrderItem = await prisma.orderItems.update({
      where: { id: orderItemId },
      data: updatedData,
    });
    return updatedOrderItem;
  } catch (error) {
    throw error;
  }
};

const deleteOrderItem = async (orderItemId) => {
  try {
    const deletedOrderItem = await prisma.orderItems.delete({
      where: { id: orderItemId },
    });
    return deletedOrderItem;
  } catch (error) {
    throw error;
  }
};

const getAllOrderItems = async () => {
  try {
    const orderItems = await prisma.orderItems.findMany({
      include: { product: true, Order: true },
    });
    return orderItems;
  } catch (error) {
    throw error;
  }
};

const getOrderItems = async () => {
  try {
    const orderItem = await prisma.orderItems.findMany({
      include: { product: true, Order: true },
    });
    return orderItem;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createOrderItem,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
  getAllOrderItems,
  getOrderItems,
};
