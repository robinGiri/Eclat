const express = require("express");
const productController = require("../controller/product.controller");
const uploader = require("../jobs/imageUploaderJob");

const router = express.Router();

router.post("/", uploader.array("image"), productController.createProduct);
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
router.patch(
  "/upload",
  uploader.array("image"),
  productController.updateProductPicture
);

module.exports = router;
