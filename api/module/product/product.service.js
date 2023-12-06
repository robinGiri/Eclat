const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProductService {
  async createProduct(data) {
    try {
      const res = await prisma.product.create({
        data,
      });
      return res;
    } catch (error) {
      console.error("Error creating product:", error.message);
      throw error;
    }
  }

  async updateProduct(productId, updatedProductDTO) {
    try {
      const res = await prisma.product.update({
        where: { id: parseInt(productId) },
        data: updatedProductDTO,
      });
      return res;
    } catch (error) {
      console.error("Error updating product:", error.message);
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      const res = await prisma.product.delete({
        where: { id: parseInt(productId) },
      });
      console.log(res);
    } catch (error) {
      console.error("Error deleting product:", error.message);
      throw error;
    }
  }

  async getAllProducts() {
    try {
      const res = await prisma.product.findMany();
      console.log(res);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      const res = await prisma.product.findMany({
        where: { id: parseInt(productId) },
      });
      console.log(res);
    } catch (error) {
      console.error("Error fetching product:", error.message);
      throw error;
    }
  }
}

module.exports = new ProductService();
