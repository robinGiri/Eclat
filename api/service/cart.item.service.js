const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const include = {
  product: true,
};

// Create CartItem
async function createCartItem(cartId, productId, quantity) {
  try {
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cartId,
        productId: productId,
      },
    });

    if (existingCartItem) {
      const updatedCartItem = await prisma.cartItem.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: existingCartItem.quantity + quantity,
        },
        include: include,
      });

      return updatedCartItem;
    } else {
      const createdCartItem = await prisma.cartItem.create({
        data: {
          cartId,
          productId,
          quantity,
        },
        include: include,
      });

      return createdCartItem;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Read CartItem by ID
async function getCartItemById(cartItemId) {
  try {
    const cartItem = await prisma.cartItem.findUnique({
      where: { id: cartItemId },
      include: include,
    });
    return cartItem;
  } catch (error) {
    throw error;
  }
}

// Update CartItem
async function updateCartItem(cartItemId, updatedData) {
  try {
    if (isNaN(cartItemId)) {
      throw new Error("Invalid cartItemId. It should be a valid number.");
    }

    const updatedCartItem = await prisma.cartItem.update({
      where: { id: parseInt(cartItemId) },
      data: updatedData,
    });

    return updatedCartItem;
  } catch (error) {
    throw error;
  }
}

// Delete CartItem by ID
async function deleteCartItem(cartItemId) {
  try {
    const deletedCartItem = await prisma.cartItem.delete({
      where: { id: cartItemId },
    });
    return deletedCartItem;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCartItem,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
};
