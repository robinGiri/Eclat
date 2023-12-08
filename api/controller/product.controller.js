// productController.js
const productService = require("../service/product.service");

class ProductController {
  async createProduct(req, res, next) {
    try {
      let data = await productService.transformProductCreateData(req);
      let product = await productService.createProduct(data);
      res.json({
        result: product,
        message: "product created successfully",
        meta: null,
      });
    } catch (err) {
      next(err);
    }
  }

  async getAllProducts(req, res, next) {
    try {
      const product = await productService.getAllProducts();
      res.json({
        result: product,
        message: "product fetched successfully",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const productId = req.params.id;
      const product = await productService.getProductById(productId);
      if (!product || product.length <= 0) {
        return res.status(404).send("Product not found");
      }
      res.json({
        result: product,
        message: "product fetched successfully",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const productId = req.params.id; // Assuming the product ID is in the URL parameters
      const data = await productService.updateProduct(productId, req.body);
      res.json({
        result: data,
        message: "product updated successfully",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;

      // Call the deleteProduct method from the service
      const data = await productService.deleteProduct(productId);

      res.json({
        result: data,
        message: "product deleted successfully",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
