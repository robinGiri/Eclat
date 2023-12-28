// services/cartService.js

class CartService {
  include = {
    cartItems: true,
    Payment: true,
    Shipment: true,
  };

  async createCart(userId) {
    try {
      const newCart = await prisma.cart.create({
        data: { total: 0, userId: userId },
      });

      return newCart;
    } catch (error) {
      throw new Error(`Error creating cart: ${error.message}`);
    }
  }

  async getCartItemsByCartId(cartId) {
    try {
      const cartItems = await prisma.cartItem.findMany({
        where: {
          cartId: cartId,
        },
        include: {
          product: true,
        },
      });

      return cartItems;
    } catch (error) {
      throw new Error(`Error fetching cart items: ${error.message}`);
    }
  }

  async getCartById(cartId) {
    try {
      const cart = await prisma.cart.findUnique({
        where: {
          id: cartId,
        },
        include: this.include,
      });

      return cart;
    } catch (error) {
      throw new Error(`Error fetching cart: ${error.message}`);
    }
  }

  async deleteCart(cartId) {
    try {
      const deletedCart = await prisma.cart.delete({
        where: {
          id: cartId,
        },
      });

      return deletedCart;
    } catch (error) {
      throw new Error(`Error deleting cart: ${error.message}`);
    }
  }
}

class CartItemService {
  async createCartItem(data) {
    try {
      const newCartItem = await prisma.cartItem.create({
        data: data,
      });

      return newCartItem;
    } catch (error) {
      throw new Error(`Error creating cart item: ${error.message}`);
    }
  }

  async updateCartItem(cartItemId, quantity) {
    try {
      const updatedCartItem = await prisma.cartItem.update({
        where: {
          id: cartItemId,
        },
        data: {
          quantity,
        },
      });

      return updatedCartItem;
    } catch (error) {
      throw new Error(`Error updating cart item: ${error.message}`);
    }
  }

  async getCartItemById(cartItemId) {
    try {
      const cartItem = await prisma.cartItem.findUnique({
        where: {
          id: cartItemId,
        },
      });

      return cartItem;
    } catch (error) {
      throw new Error(`Error fetching cart item: ${error.message}`);
    }
  }

  async deleteCartItem(cartItemId) {
    try {
      const deletedCartItem = await prisma.cartItem.delete({
        where: {
          id: cartItemId,
        },
      });

      return deletedCartItem;
    } catch (error) {
      throw new Error(`Error deleting cart item: ${error.message}`);
    }
  }
}

const cartService = new CartService();
const cartItemService = new CartItemService();

module.exports = {
  cartService,
  cartItemService,
};
