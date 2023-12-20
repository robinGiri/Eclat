const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
class CartService {
  async createCart(data) {
    const cart = await prisma.cartItem.create({ data });
    return cart;
  }
  async updateCart(id, data) {
    const item = await prisma.cartItem.findUnique({ where: { id: id } });
    if (!item) {
      return null;
    }
    const cart = await prisma.cartItem.update({ where: { id: id }, data });
    return cart;
  }
  async deleteCart(id) {
    const item = await prisma.cartItem.delete({ where: { id: id } });
    return item;
  }
  async getCartByFilter(filter) {
    const item = await prisma.cartItem.findMany({ where: filter });
    return item;
  }
}
const cartService = new CartService();
module.exports = cartService;
