const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CartService {
  include = {
    cartItem: true,
  };
  createCart = async (userId) => {
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
  include = {
    product: true,
  };
  // Create CartItem
  async createCartItem(cartId, productId, quantity) {
    try {
      const createdCartItem = await prisma.cartItem.create({
        data: {
          cartId,
          productId,
          quantity,
        },
        include: this.include,
      });
      return createdCartItem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // Read CartItem by ID
  async getCartItemById(cartItemId) {
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
  async updateCartItem(cartItemId, updatedData) {
    try {
      const updatedCartItem = await prisma.cartItem.update({
        where: { id: cartItemId },
        data: updatedData,
      });
      return updatedCartItem;
    } catch (error) {
      throw error;
    }
  }

  // Delete CartItem by ID
  async deleteCartItem(cartItemId) {
    try {
      const deletedCartItem = await prisma.cartItem.delete({
        where: { id: cartItemId },
      });
      return deletedCartItem;
    } catch (error) {
      throw error;
    }
  }
}
const cartService = new CartService();
const cartItemService = new CartItemService();

module.exports = { cartService, cartItemService };
