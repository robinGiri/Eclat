const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const slugify = require("slugify");

class ProductService {
  transformProductCreateData(request, isEdit = false) {
    let product = {
      ...request.body,
    };
    if (product.brands) {
      product.brands = product.brands.split(",");
    } else if (!product.brands || product.brands === "null") {
      product.brands = null;
    }
    if (!product.seller || product.seller === "null") {
      product.seller = null;
    }
    if (product.category) {
      product.category = product.category.split(",");
    } else if (!product.category || product.category === "null") {
      product.category = null;
    }
    if (!request.files && isEdit === false) {
      throw {
        code: 400,
        message: "Validation Faliure",
        result: { image: "Image is reuired" },
      };
    } else if (request.files) {
      product["image"] = request.files.map((image) => image.filename);
    }
    if (!isEdit) {
      product["slug"] = slugify(product.name, {
        replacement: "-",
        lower: true,
        trim: true,
      });
    }
    if (isEdit) {
      delete product.delImage;
    }
    product["afterDiscount"] =
      product.price - (product.price * product.discount) / 100;

    return product;
  }
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
      return res;
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
      return res;
    } catch (error) {
      console.error("Error fetching product:", error.message);
      throw error;
    }
  }
}

module.exports = new ProductService();
