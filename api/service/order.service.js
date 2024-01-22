const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class OrderService {
  // Create Order
  async createOrder(data) {
    try {
      const createdOrder = await prisma.order.create({
        data,
      });
      return createdOrder;
    } catch (error) {
      throw error;
    }
  }

  // Read Order by ID
  async getOrderById(orderId) {
    try {
      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: { OrderItems: true }, // Include associated OrderItems if needed
      });
      return order;
    } catch (error) {
      throw error;
    }
  }

  // Read Order by customerID
  async getOrderBycustomerId(customerId) {
    try {
      const order = await prisma.order.findUnique({
        where: { customerId: customerId },
        include: { OrderItems: true, Voucher: true }, // Include associated OrderItems if needed
      });
      return order;
    } catch (error) {
      throw error;
    }
  }

  // Update Order
  async updateOrder(orderId, updatedData) {
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

  // Delete Order by ID
  async deleteOrder(orderId) {
    try {
      const deletedOrder = await prisma.order.delete({
        where: { id: orderId },
      });
      return deletedOrder;
    } catch (error) {
      throw error;
    }
  }
  async getTotalOrderPerMonth(year, month) {
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
}

class OrderItemsService {
  // Create OrderItem
  async createOrderItem(orderId, productId, quantity) {
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
  }

  // Read OrderItem by ID
  async getOrderItemById(orderItemId) {
    try {
      const orderItem = await prisma.orderItems.findUnique({
        where: { id: orderItemId },
        include: { product: true, Order: true }, // Include associated Product and Order if needed
      });
      return orderItem;
    } catch (error) {
      throw error;
    }
  }

  // Update OrderItem
  async updateOrderItem(orderItemId, updatedData) {
    try {
      const updatedOrderItem = await prisma.orderItems.update({
        where: { id: orderItemId },
        data: updatedData,
      });
      return updatedOrderItem;
    } catch (error) {
      throw error;
    }
  }

  // Delete OrderItem by ID
  async deleteOrderItem(orderItemId) {
    try {
      const deletedOrderItem = await prisma.orderItems.delete({
        where: { id: orderItemId },
      });
      return deletedOrderItem;
    } catch (error) {
      throw error;
    }
  }

  async getAllOrderItems() {
    try {
      const orderItems = await prisma.orderItems.findMany({
        include: { product: true, Order: true },
      });
      return orderItems;
    } catch (error) {
      throw error;
    }
  }

  async getOrderItems() {
    try {
      const orderItem = await prisma.orderItems.findMany({
        include: { product: true, Order: true }, // Include associated Product and Order if needed
      });
      return orderItem;
    } catch (error) {
      throw error;
    }
  }
}

const orderItemsService = new OrderItemsService();
const orderService = new OrderService();

module.exports = { orderService, orderItemsService };
