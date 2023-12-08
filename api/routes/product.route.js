// productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const uploader = require("../middleware/uploader.middleware");

router.post("/", uploader.array("image"), productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", uploader.array("image"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
