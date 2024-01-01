const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CartService {
  include = {
    cartItem: true,
  };
  createCart = async (userId) => {
    try {
      const createdCart = await prisma.cart.create({
        data: {
          User: { connect: { id: userId } },
        },
      });
      return createdCart;
    } catch (error) {
      throw error;
    }
  };

  getCartById = async (cartId) => {
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

  updateCart = async (cartId, updatedData) => {
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

  deleteCart = async (cartId) => {
    try {
      const deletedCart = await prisma.cart.delete({
        where: { id: cartId },
      });
      return deletedCart;
    } catch (error) {
      throw error;
    }
  };
}

class CartItemService {
  createCartItem = async (cartId, productId, quantity) => {
    try {
      const createdCartItem = await prisma.cartItem.create({
        data: {
          cartId,
          productId,
          quantity,
        },
      });
      return createdCartItem;
    } catch (error) {
      throw error;
    }
  };

  getCartItemById = async (cartItemId) => {
    try {
      const cartItem = await prisma.cartItem.findUnique({
        where: { id: cartItemId },
      });
      return cartItem;
    } catch (error) {
      throw error;
    }
  };

  updateCartItem = async (cartItemId, updatedData) => {
    try {
      const updatedCartItem = await prisma.cartItem.update({
        where: { id: cartItemId },
        data: updatedData,
      });
      return updatedCartItem;
    } catch (error) {
      throw error;
    }
  };

  deleteCartItem = async (cartItemId) => {
    try {
      const deletedCartItem = await prisma.cartItem.delete({
        where: { id: cartItemId },
      });
      return deletedCartItem;
    } catch (error) {
      throw error;
    }
  };
  deleteManyCartItem = async (cartItemIds) => {
    try {
      const deletedCartItem = await prisma.cartItem.delete({
        where: { id: { in: cartItemIds } },
      });
      return deletedCartItem;
    } catch (error) {
      throw error;
    }
  };
}
const cartService = new CartService();
const cartItemService = new CartItemService();

module.exports = {
  cartService,
  cartItemService,
};
