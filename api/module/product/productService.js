const db = require("../../config/databaseConfig");
const product = require("./productModel");

class ProductService {
  async createProduct(productDTO) {
    const {
      name,
      slug,
      description,
      category,
      brands,
      price,
      discount,
      afterdiscount,
      seller,
      isFeatured,
      tags,
      stock,
      image,
      status,
      viewCount,
    } = productDTO;

    try {
      // Create the table if it doesn't exist
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS products (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) NOT NULL,
          description TEXT,
          category VARCHAR(255),
          brands VARCHAR(255),
          price DECIMAL(10, 2),
          discount DECIMAL(10, 2),
          afterdiscount DECIMAL(10, 2),
          seller VARCHAR(255),
          isFeatured BOOLEAN,
          tags VARCHAR(255),
          stock INT,
          image VARCHAR(255),
          status VARCHAR(50),
          viewCount INT
        )
      `;
      await db.query(createTableQuery);

      // Insert the product
      const result = await db.query(
        "INSERT INTO products (name, slug, description, category, brands, price, discount, afterdiscount, seller, isFeatured, tags, stock, image, status, viewCount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          name,
          slug,
          description,
          category,
          brands,
          price,
          discount,
          afterdiscount,
          seller,
          isFeatured,
          tags,
          stock,
          image,
          status,
          viewCount,
        ]
      );

      return result[0];
    } catch (error) {
      console.error("Error creating product:", error.message);
      throw error;
    }
  }
  async updateProduct(productId, updatedProductDTO) {
    const {
      name,
      slug,
      description,
      category,
      brands,
      price,
      discount,
      afterdiscount,
      seller,
      isFeatured,
      tags,
      stock,
      image,
      status,
      viewCount,
    } = updatedProductDTO;

    try {
      // Check if the product exists
      const productExistsQuery = "SELECT * FROM products WHERE id = ?";
      const [existingProduct] = await db.query(productExistsQuery, [productId]);

      if (!existingProduct || existingProduct.length === 0) {
        throw new Error("Product not found");
      }

      // Update the product
      const updateProductQuery = `
        UPDATE products
        SET
          name = ?,
          slug = ?,
          description = ?,
          category = ?,
          brands = ?,
          price = ?,
          discount = ?,
          afterdiscount = ?,
          seller = ?,
          isFeatured = ?,
          tags = ?,
          stock = ?,
          image = ?,
          status = ?,
          viewCount = ?
        WHERE id = ?
      `;
      await db.query(updateProductQuery, [
        name,
        slug,
        description,
        category,
        brands,
        price,
        discount,
        afterdiscount,
        seller,
        isFeatured,
        tags,
        stock,
        image,
        status,
        viewCount,
        productId,
      ]);

      return "Product updated successfully";
    } catch (error) {
      console.error("Error updating product:", error.message);
      throw error;
    }
  }
}

module.exports = new ProductService();
