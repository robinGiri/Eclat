// services/shipmentService.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ShipmentService {
  async createShipment(orderId, shipmentStatus, trackingNumber) {
    try {
      const shipment = await prisma.shipment.create({
        data: {
          orderId: orderId,
          shipmentStatus: shipmentStatus,
          trackingNumber: trackingNumber,
        },
      });

      return shipment;
    } catch (error) {
      throw new Error(`Error creating shipment: ${error.message}`);
    }
  }

  async getShipmentById(shipmentId) {
    try {
      const shipment = await prisma.shipment.findUnique({
        where: {
          id: shipmentId,
        },
      });

      return shipment;
    } catch (error) {
      throw new Error(`Error fetching shipment: ${error.message}`);
    }
  }

  async updateShipment(shipmentId, updates) {
    try {
      const updatedShipment = await prisma.shipment.update({
        where: {
          id: shipmentId,
        },
        data: updates,
      });

      return updatedShipment;
    } catch (error) {
      throw new Error(`Error updating shipment: ${error.message}`);
    }
  }

  async deleteShipment(shipmentId) {
    try {
      const deletedShipment = await prisma.shipment.delete({
        where: {
          id: shipmentId,
        },
      });

      return deletedShipment;
    } catch (error) {
      throw new Error(`Error deleting shipment: ${error.message}`);
    }
  }
}

const shipmentService = new ShipmentService();

module.exports = shipmentService;
