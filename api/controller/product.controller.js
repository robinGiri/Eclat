const productService = require("../service/product.service");
const imageService = require("../service/image.service");
const settingService = require("../service/setting.service");
const uploader = require("../jobs/imageUploaderJob");
const { deleteFile } = require("../helper/helper");
const verifyToken = require("../middleware/token.verify");
const validationChecker = require("../middleware/validation.checker");
const validatedRequest = require("../middleware/validation.middleware");
const {
  productCreateSchema,
  productUpdateSchema,
} = require("../validator/product.validator");

const router = require("express").Router();

router.post(
  "/",
  validatedRequest(productCreateSchema),
  uploader.array("image"),
  async (req, res) => {
    try {
      const {
        name,
        description,
        category,
        price,
        viewCount,
        slug,
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
        slug,
        discount: parseFloat(discount),
        afterdiscount: afterDiscount,
        isFeatured: true,
        sellerId: parseInt(sellerId),
        status,
        seasonId: parseInt(seasonId),
      };

      const { id } = await productService.save(finalData);

      if (req.files) {
        req.files.forEach(({ filename }) => {
          imageService.save(filename, { productId: id, seasonId: null });
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
  }
);

router.get("/", async (req, res) => {
  try {
    const product = await productService.fetchAll();
    res.json({
      result: product,
      message: "product fetched successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
});

router.get("/season", async (req, res) => {
  try {
    const { currentSeason } = await settingService.getSetting();
    const product = await productService.getProductsBySeason(
      parseInt(currentSeason)
    );
    res.json({
      result: product,
      message: "product fetched successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
});

router.get("/search", async (req, res) => {
  try {
    const searchQuery = req.query.q;
    if (!searchQuery) {
      return res.status(404).send("no search data");
    }
    const products = await productService.query(searchQuery);
    res.json({
      result: products,
      message: "product fetched successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productService.fetchByID(productId);
    if (!product || product.length <= 0) {
      return res.status(404).send("Product not found");
    }
    res.json({
      result: product,
      message: "product fetched successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
});

router.put(
  "/:productId",
  validatedRequest(productUpdateSchema),
  uploader.array("image"),
  async (req, res, next) => {
    try {
      const productId = req.params.productId;

      const {
        name,
        description,
        category,
        price,
        viewCount,
        slug,
        discount,
        status,
        //in the delImage it will send the list for the images which user want to relace
        delImg,
      } = req.body;

      if (delImg) {
        //list of all images from the list
        const delete_image_array = delImg.split(",");

        // will delete the images from the database
        delete_image_array.forEach(async (img) => {
          const image = imageService.findImageByUrl(img);
          if (image) {
            await imageService.deleteImageByUrl(img);
            deleteFile("./public/uploads/" + img);
          }
          //will update upload the updated images
          const images = [];
          req.files.forEach(({ filename }) => {
            images.push(filename);
          });
          imageService.saveMultiple(images, productId);
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
        slug,
        discount: parseFloat(discount),
        afterdiscount: afterDiscount,
        isFeatured: true,
        tags: "tag1, tag2, tag3",
        sellerId: 1,
        status,
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
  }
);

router.delete("/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const data = await productService.deleteByID(productId);
    res.json({
      result: data,
      message: "product deleted successfully",
      meta: null,
    });
  } catch (e) {
    next(e);
  }
});

router.post("/upload", uploader.single("image"), async (req, res, next) => {
  imageService.save(req.file.filename, 8);
  res.json({
    file: req.file.filename,
  });
});

module.exports = router;
