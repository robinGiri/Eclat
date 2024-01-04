const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const include = {
  seller: true,
  brand: true,
  images: true,
  Season: true,
};

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
        delete data.include;

        const { isFeatured, ...restData } = data;

        res = await prisma.product.create({
          data: {
            ...restData,
            isFeatured: !!isFeatured,
          },
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
      await prisma.image.deleteMany({
        where: {
          productId: parseInt(productId),
        },
      });
      const res = await prisma.product.delete({
        where: { id: parseInt(productId) },
      });

      console.log(res);
      return res;
    } catch (error) {
      console.error("Error deleting product:", error.message);
      throw error;
    }
  }

  async fetchAll() {
    try {
      const res = await prisma.product.findMany({
        include,
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
        include,
      });
      return res;
    } catch (error) {
      console.error("Error fetching product:", error.message);
      throw error;
    }
  }
  async query(searchTerm) {
    console.log(searchTerm);
    try {
      const products = await prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: searchTerm } },
            { description: { contains: searchTerm } },
            { category: { contains: searchTerm } },
            { tags: { contains: searchTerm } },
          ],
        },
        include: {
          brand: true,
          seller: true,
          stock: true,
          images: true,
        },
      });
      return products;
    } catch (error) {
      console.log("Error fetching data:", error.message);
      throw error;
    }
  }

  async update(updatedData, productId) {
    try {
      const res = await prisma.product.update({
        where: { id: parseInt(productId) },
        data: updatedData,
        include,
      });
      return res;
    } catch (error) {
      console.error("Error updating product:", error.message);
      throw error;
    }
  }
  async getProductsBySeason(seasonId) {
    try {
      const products = await prisma.product.findMany({
        where: {
          seasonId: seasonId,
        },
        include,
      });

      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();
