// productController.js
const productService = require("./product.service");
const ProductDTO = require("./product.DTO");
const { consola } = require("consola");

class ProductController {
  async createProduct(req, res, next) {
    let productDTO = new ProductDTO(req.body);
    try {
      let data = await productService.createProduct(productDTO);
      res.json({
        result: data,
        message: "product created successfully",
        meta: null,
      });
    } catch (err) {
      next(err);
    }
  }

  async getAllProducts(req, res, next) {
    try {
      const data = await productService.getAllProducts();
      res.json({
        result: data,
        message: "product fetched successfully",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await productService.getProductById(productId);
      if (!product) {
        return res.status(404).send("Product not found");
      }
      res.json({
        result: data,
        message: "product fetched successfully",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res) {
    try {
      const productId = req.params.id; // Assuming the product ID is in the URL parameters
      const updatedProductDTO = new ProductDTO(req.body); // Assuming the updated product data is in the request body

      const data = await productService.updateProduct(
        productId,
        updatedProductDTO
      );
      if (!result) {
        res.status(404).json({ message: "cannot find the data" });
      }
      res.json({
        result: data,
        message: "product updated successfully",
        meta: null,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res) {
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
