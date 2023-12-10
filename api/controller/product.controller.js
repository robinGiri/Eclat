const productService = require("../service/product.service");
const imageService = require("../service/image.service")
const uploader = require("../jobs/imageUploaderJob")
const productTransformer = require('../jobs/productTransformerJob')
const router = require("express").Router();

router.post("/",uploader.single("image"), async (req, res) => {
  try {
      let product = await productService.save(JSON.parse(req.body.form));
      await imageService.save(req.file.filename,product.id);
      res.json({
        result: await productService.fetchByID(product.id),
        message: "product created successfully",
        meta: null,
      });
  } 
  catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await productService.fetchAll();
    res.json({
      result: product,
      message: "product fetched successfully",
      meta: null,
    });
  } 
  catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/:id", async (req, res) => {
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
  } 
  catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    req.body.id = parseInt(productId);
    const data = await productService.save(req.body);
    res.json({
      result: data,
      message: "product updated successfully",
      meta: null,
    });
  } 
  catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const data = await productService.deleteByID(productId);
    res.json({
      result: data,
      message: "product deleted successfully",
      meta: null,
    });
  } 
  catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/upload", uploader.single("image"), async (req, res) => {
  imageService.save(req.file.filename,8);
  res.json({
    file : req.file.filename
  })
});

module.exports = router;