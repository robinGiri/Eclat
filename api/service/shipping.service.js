const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Include related models
// const include = {
//   Order: {
//     select: {
//       id: true,
//       total: true,
//       userId: true,
//       customer: {
//         select: {
//           id: true,
//           name: true,
//           email: true,
//         },
//       },
//       OrderItems: {
//         select: {
//           id: true,
//           productId: true,
//           quantity: true,
//           product: {
//             select: {
//               id: true,
//               name: true,
//               afterdiscount: true, // Include afterdiscount field
//               images: true,
//             },
//           },
//         },
//       },
//     },
//   },
//   Purchase: true,
// };

// Function to create shipping
async function createShipping(orderId, purchaseId) {
  try {
    const createdShipping = await prisma.shipping.create({
      data: {
        orderId: orderId,
        purchaseId: purchaseId,
      },
    });
    return createdShipping;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to get shipping by ID
async function getShippingById(shippingId) {
  try {
    const shipping = await prisma.shipping.findUnique({
      where: { id: shippingId },
    });
    return shipping;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to get all shipping
async function getAllShipping() {
  try {
    const shippingList = await prisma.shipping.findMany({});
    return shippingList;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to update shipping
async function updateShipping(shippingId, status) {
  try {
    const updatedShipping = await prisma.shipping.update({
      where: { id: shippingId },
      data: { status: status },
    });
    return updatedShipping;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  createShipping,
  getShippingById,
  getAllShipping,
  updateShipping,
};
