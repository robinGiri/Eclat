// services/paymentService.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class PaymentService {
  async createPayment(orderId, amount, paymentStatus, paymentToken) {
    try {
      const payment = await prisma.payment.create({
        data: {
          orderId: orderId,
          amount: amount,
          paymentStatus: paymentStatus,
          paymentToken: paymentToken,
        },
      });

      return payment;
    } catch (error) {
      throw new Error(`Error creating payment: ${error.message}`);
    }
  }

  async getPaymentById(paymentId) {
    try {
      const payment = await prisma.payment.findUnique({
        where: {
          id: paymentId,
        },
      });

      return payment;
    } catch (error) {
      throw new Error(`Error fetching payment: ${error.message}`);
    }
  }

  async updatePayment(paymentId, updates) {
    try {
      const updatedPayment = await prisma.payment.update({
        where: {
          id: paymentId,
        },
        data: updates,
      });

      return updatedPayment;
    } catch (error) {
      throw new Error(`Error updating payment: ${error.message}`);
    }
  }

  async deletePayment(paymentId) {
    try {
      const deletedPayment = await prisma.payment.delete({
        where: {
          id: paymentId,
        },
      });

      return deletedPayment;
    } catch (error) {
      throw new Error(`Error deleting payment: ${error.message}`);
    }
  }
}

const paymentService = new PaymentService();

module.exports = paymentService;
