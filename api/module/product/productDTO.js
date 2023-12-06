// productDTO.js
class ProductDTO {
  constructor(req) {
    this.name = req.name;
    this.slug = req.slug;
    this.description = req.description;
    this.category = req.category;
    this.brands = req.brands;
    this.price = req.price;
    this.discount = req.discount;
    this.afterdiscount = req.afterdiscount;
    this.seller = req.seller;
    this.isFeatured = req.isFeatured;
    this.tags = req.tags;
    this.stock = req.stock;
    this.image = req.image;
    this.status = req.status;
    this.viewCount = req.viewCount;
  }
}

module.exports = ProductDTO;
