const productService = require("../service/product.service");
const imageService = require("../service/image.service");
const uploader = require("../jobs/imageUploaderJob");
const { deleteFile } = require("../helper/helper");
const router = require("express").Router();

router.post("/", uploader.array("image"), async (req, res) => {
  try {
    const images = [];

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
      tags: "tag1, tag2, tag3",
      sellerId: parseInt(sellerId),
      status,
    };
    console.log("I am final data");
    console.log(finalData);

    const { id } = await productService.save(finalData);

    if (req.files) {
      req.files.forEach(({ filename }) => {
        images.push(filename);
      });
      imageService.saveMultiple(images, id);
    }
    res.json({
      result: await productService.fetchByID(id),
      message: "Product created successfully",
      meta: null,
    });
  } catch (e) {
    console.error(e);
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

router.put("/:productId", uploader.array("image"), async (req, res) => {
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

    //list of all images from the list
    const delete_image_array = delImg.split(",");

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

    // will delete the images from the database
    delete_image_array.forEach(async (img) => {
      const image = imageService.findImageByUrl(img);
      if (image) {
        await imageService.deleteImageByUrl(img);
        deleteFile("./public/uploads/" + img);
      }
    });

    //will update upload the updated images
    const images = [];
    req.files.forEach(({ filename }) => {
      images.push(filename);
    });
    imageService.saveMultiple(images, productId);

    res.json({
      result: await productService.fetchByID(productId),
      message: "Product updated successfully",
      meta: null,
    });
  } catch (e) {
    console.error(e);
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
