// productModel.js
class Product {
  constructor(id, productDTO) {
    this.id = id;
    this.name = productDTO.name;
    this.slug = productDTO.slug;
    this.description = productDTO.description;
    this.category = productDTO.category;
    this.brands = productDTO.brands;
    this.price = productDTO.price;
    this.discount = productDTO.discount;
    this.afterdiscount = productDTO.afterdiscount;
    this.seller = productDTO.seller;
    this.isFeatured = productDTO.isFeatured;
    this.tags = productDTO.tags;
    this.stock = productDTO.stock;
    this.image = productDTO.image;
    this.status = productDTO.status;
    this.viewCount = productDTO.viewCount;
  }
}

module.exports = Product;
