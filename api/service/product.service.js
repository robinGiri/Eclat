const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const slugify = require("slugify");
const include = {
                  seller : true,
                  brand : true,
                  stock :true,
                  images : true
                }

class ProductService {
  
  async save(data) {
    try {
      let res;
      if (data.id) {
        res = await prisma.product.update({
          where: { id: parseInt(data.id) },
          data,
          include,
        });
      } else {
        res = await prisma.product.create({
          data,
          include,
        });
      }
      return res;
    } catch (error) {
      console.error("Error saving product:", error.message);
      throw error;
    }
  }

  async deleteByID(productId) {
    try {
      const res = await prisma.product.delete({
        where: { id: parseInt(productId) },
        include
      });
      console.log(res);
    } catch (error) {
      console.error("Error deleting product:", error.message);
      throw error;
    }
  }

  async fetchAll() {
    try {
      const res = await prisma.product.findMany({
        include
      });
      return res;
    } catch (error) {
      console.error("Error fetching products:", error.message);
      throw error;
    }
  }

  async fetchByID(productID) {
    try {
      const res = await prisma.product.findMany({
        where: { id: parseInt(productID) },
        include
      });
      return res;
    } catch (error) {
      console.error("Error fetching product:", error.message);
      throw error;
    }
  }
}

module.exports = new ProductService();
