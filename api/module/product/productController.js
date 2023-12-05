// productController.js
const productService = require("./productService");
const ProductDTO = require("./productDTO");
const { consola } = require("consola");

class ProductController {
  async createProduct(req, res) {
    let productDTO = new ProductDTO(req.body);
    try {
      const productId = await productService.createProduct(productDTO);
      consola.success("Successfully created product");
      res.status(201).json({ id: productId, status: "success" });
    } catch (err) {
      consola.error(err);
      res
        .status(500)
        .json({ msg: "Cannot create the product data", status: "failed" });
    }
  }

  async getAllProducts(req, res) {
    // try {
    //   const products = await productService.getAllProducts();
    //   res.status(200).json(products);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send("Internal Server Error");
    // }
  }

  async getProductById(req, res) {
    // try {
    //   const productId = req.params.id;
    //   const product = await productService.getProductById(productId);
    //   if (!product) {
    //     return res.status(404).send("Product not found");
    //   }
    //   res.status(200).json(product);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send("Internal Server Error");
    // }
  }

  async updateProduct(req, res) {
    try {
      const productId = req.params.id; // Assuming the product ID is in the URL parameters
      let updatedProductDTO = new ProductDTO(req.body); // Assuming the updated product data is in the request body
      console.log(updatedProductDTO);

      const result = await productService.updateProduct(
        productId,
        updatedProductDTO
      );
      consola.success("Updated successfully");
      res.status(200).json({ message: result });
    } catch (error) {
      consola.warn("here");
      consola.error("Error updating product:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteProduct(req, res) {
    // try {
    //   const productId = req.params.id;
    //   const deletedProduct = await productService.deleteProduct(productId);
    //   if (!deletedProduct) {
    //     return res.status(404).send("Product not found");
    //   }
    //   res.status(200).json(deletedProduct);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send("Internal Server Error");
    // }
  }
}

module.exports = new ProductController();
