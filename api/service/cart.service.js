const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const include = {
  cartItem: true,
};

// Create Cart
const createCart = async (userId) => {
  try {
    console.log("cart create");
    const createdCart = await prisma.cart.create({
      data: { userId: userId },
    });
    return createdCart;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get Cart by ID
const getCartById = async (cartId) => {
  try {
    const cart = await prisma.cart.findUnique({
      where: { id: cartId },
      include: { cartItems: true },
    });
    return cart;
  } catch (error) {
    throw error;
  }
};

// Update Cart
const updateCart = async (cartId, updatedData) => {
  try {
    const updatedCart = await prisma.cart.update({
      where: { id: cartId },
      data: updatedData,
    });
    return updatedCart;
  } catch (error) {
    throw error;
  }
};

// Delete Cart
const deleteCart = async (cartId) => {
  try {
    const deletedCart = await prisma.cart.delete({
      where: { id: cartId },
    });
    return deletedCart;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCart,
  getCartById,
  updateCart,
  deleteCart,
};
