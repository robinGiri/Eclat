const productService = require("../service/product.service");
const imageService = require("../service/image.service");
const uploader = require("../jobs/imageUploaderJob");
const router = require("express").Router();

router.post("/", uploader.array("image"), async (req, res) => {
  try {
    const form_data = JSON.parse(req.body.form);
    const data = { body: form_data, files: { ...req.files } };
    // console.log(product);
    // await productService.save(JSON.parse(req.body.form));
    // await imageService.saveMultiple(req.files, product.id);
    res.json({
      result: await productService.fetchByID(product.id),
      message: "product created successfully",
      meta: null,
    });
  } catch (e) {
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
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const searchQuery = req.query.q;
    if (!searchQuery) {
      return res.status(404).send("no search data");
    }
    const products = await productService.query(searchQuery);
    console.log(products);
    res.json({
      result: products,
      message: "product fetched successfully",
      meta: null,
    });
  } catch (e) {
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
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    req.body.id = parseInt(productId);
    const getdata = productService.fetchByID(productId);
    if (!getdata) {
      res.json({
        result: null,
        message: "product not found",
        meta: null,
      });
    }
    const data = await productService.save(req.body);
    res.json({
      result: data,
      message: "product updated successfully",
      meta: null,
    });
  } catch (e) {
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
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/upload", uploader.single("image"), async (req, res) => {
  imageService.save(req.file.filename, 8);
  res.json({
    file: req.file.filename,
  });
});

module.exports = router;
