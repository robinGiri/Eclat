const productService = require("../service/product.service");
const imageService = require("../service/image.service");
const settingService = require("../service/setting.service");
const { deleteFile } = require("../helper/helper");

const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      category,
      price,
      viewCount,
      discount,
      status,
      seasonId,
      isEcoFriendly,
    } = req.body;
    console.log("season", seasonId);

    const afterDiscount =
      parseFloat(price) - parseFloat(price) * (parseFloat(discount) / 100);

    const finalData = {
      name,
      description,
      category,
      price: parseFloat(price),
      viewCount: parseInt(viewCount),
      discount: parseFloat(discount),
      afterdiscount: afterDiscount,
      isFeatured: true,
      status,
      seasonId: parseInt(seasonId),
      isEcoFriendly: JSON.parse(isEcoFriendly),
    };

    const { id } = await productService.save(finalData);

    if (req.files) {
      req.files.forEach(({ filename }) => {
        imageService.saveImage(filename, id);
      });
    }

    res.json({
      result: await productService.fetchByID(id),
      message: "Product created successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.fetchAll();
    res.json({
      result: products,
      message: "Products fetched successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
};

const getProductsBySeason = async (req, res, next) => {
  try {
    const { currentSeason } = await settingService.getSetting();
    const products = await productService.getProductsBySeason(
      parseInt(currentSeason)
    );
    res.json({
      result: products,
      message: "Products fetched successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
};

const searchProducts = async (req, res, next) => {
  try {
    const searchQuery = req.query.q;
    if (!searchQuery) {
      return res.status(404).send("No search data");
    }
    const products = await productService.query(searchQuery);
    res.json({
      result: products,
      message: "Products fetched successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productService.fetchByID(productId);
    if (!product || product.length <= 0) {
      return res.status(404).send("Product not found");
    }
    res.json({
      result: product,
      message: "Product fetched successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;

    const {
      name,
      description,
      category,
      price,
      viewCount,
      discount,
      status,
      delImg,
      seasonId,
      isEcoFriendly,
    } = req.body;

    if (req.files) {
      req.files.forEach(({ filename }) => {
        imageService.updateImage(filename, productId);
      });
    }

    const afterDiscount =
      parseFloat(price) - parseFloat(price) * (parseFloat(discount) / 100);

    const updatedProductData = {
      name,
      description,
      category,
      price: parseFloat(price),
      viewCount: parseInt(viewCount),
      discount: parseFloat(discount),
      afterdiscount: afterDiscount,
      isFeatured: true,
      status,
      seasonId: seasonId,
      isEcoFriendly: isEcoFriendly,
    };

    await productService.update(updatedProductData, productId);

    res.json({
      result: await productService.fetchByID(productId),
      message: "Product updated successfully",
      meta: null,
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const data = await productService.deleteByID(productId);
    res.json({
      result: data,
      message: "Product deleted successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
};

const updateProductPicture = async (req, res, next) => {
  try {
    const { productId } = req.body;
    if (req.files) {
      req.files.forEach(({ filename }) => {
        imageService.updateImage(filename, parseInt(productId));
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductsBySeason,
  searchProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  updateProductPicture,
};
