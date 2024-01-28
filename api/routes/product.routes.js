const express = require("express");
const productController = require("../controller/product.controller");
const uploader = require("../jobs/imageUploaderJob");
const validationChecker = require("../middleware/validation.checker");
const verifyToken = require("../middleware/token.verify");

const router = express.Router();

router.post(
  "/",
  verifyToken(),
  validationChecker("admin"),
  uploader.array("image"),
  productController.createProduct
);
router.get("/", productController.getAllProducts);
router.get("/season", productController.getProductsBySeason);
router.get("/search", productController.searchProducts);
router.get("/:id", productController.getProductById);
router.put(
  "/:productId",
  uploader.array("image"),
  productController.updateProduct
);
router.delete("/:id", productController.deleteProduct);
router.post("/upload", uploader.single("image"), productController.uploadImage);

module.exports = router;
