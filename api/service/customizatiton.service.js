const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwtUtil = require("../utils/jwt.util")

async function add(body) {
  const{items, productID, token} = body;
  const data = {
      items : JSON.stringify(items),
      productID : parseInt(productID),
      userID : jwtUtil.extractUserIDFromToken(token)
  }
    try {
      const existingCustomization = await prisma.customization.findUnique({
        where: {
          userID_productId: {
            userID: data.userID,
            productId: data.productID,
          },
        },
      });
  
      if (existingCustomization) {
        const updatedResult = await prisma.customization.update({
          where: {
            id: existingCustomization.id,
          },
          data: {
            customization: items.toString(),
          },
        });
        return updatedResult;
      } else {
        const newResult = await prisma.customization.create({
          data: {
            userID: data.userID,
            productId: data.productID,
            customization: data.items,
          },
        });
        return newResult;
      }
    } catch (error) {
      console.error("Error adding/updating customization:", error);
      throw error;
    }
  }
  

async function getByUserIDAndProductID(userID, productID) {
  try {
    const result = await prisma.customization.findUnique({
      where: {
        userID_productId: {
          userID: userID,
          productId: productID,
        },
      },
      include: {
        Product: true,
        User: true,
      },
    });
    return result;
  } catch (error) {
    console.error("Error getting customization:", error);
    throw error;
  }
}

async function remove(userID, productID) {
  try {
    const existingCustomization = await getByUserIDAndProductID(userID, productID);

    if (existingCustomization) {
      const deletedCustomization = await prisma.customization.delete({
        where: {
          id: existingCustomization.id,
        },
      });
      return deletedCustomization;
    } else {
      console.error("Customization not found for deletion.");
      return null;
    }
  } catch (error) {
    console.error("Error deleting customization:", error);
    throw error;
  }
}

module.exports = {
    add, getByUserIDAndProductID, remove
}
