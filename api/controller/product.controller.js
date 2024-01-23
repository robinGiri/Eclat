const productService = require("../service/product.service");
const imageService = require("../service/image.service");
const settingService = require("../service/setting.service");
const uploader = require("../jobs/imageUploaderJob");
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
      sellerId,
      seasonId,
    } = req.body;

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
      sellerId: parseInt(sellerId),
      status,
      seasonId: 1,
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
    console.error(e);
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
    console.error(e);
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
    console.error(e);
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
    console.error(e);
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
    console.error(e);
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
    } = req.body;

    if (delImg) {
      const delete_image_array = delImg.split(",");
      delete_image_array.forEach(async (img) => {
        const image = await imageService.findImageByUrl(img);
        if (image) {
          await imageService.deleteImageByUrl(img);
          deleteFile("./public/uploads/" + img);
        }
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
      sellerId: 1,
      status,
      seasonId: 1,
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
    console.error(e);
    next(e);
  }
};

const uploadImage = async (req, res, next) => {
  try {
    imageService.save(req.file.filename, 8);
    res.json({
      file: req.file.filename,
    });
  } catch (e) {
    console.error(e);
    next(e);
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
  uploadImage,
};
