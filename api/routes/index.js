const router = require("express").Router();
const productRouter = require("../module/product/route");
//product router
router.use("/product", productRouter);

module.exports = router;
