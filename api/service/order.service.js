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
  async getOrdersWithProducts() {
    try {
      const ordersWithProducts = await prisma.order.findMany({
        include: {
          OrderItems: {
            include: {
              product: {
                include: {
                  // Include other related models if needed
                  brand: true,
                  stock: true,
                  images: true,
                  season: true,
                },
              },
            },
          },
        },
      });

      res.json({
        code: 200,
        data: ordersWithProducts,
        message: "Orders with products retrieved successfully.",
        meta: null,
      });
    } catch (error) {
      console.error("Error fetching orders with products:", error);
      res.status(500).json({
        code: 500,
        message: "Internal server error.",
        meta: null,
      });
    }
  }
}

const orderItemsService = new OrderItemsService();
const orderService = new OrderService();

module.exports = { orderService, orderItemsService };