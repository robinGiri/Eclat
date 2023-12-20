const router = require("express").Router();
const cartService = require("../service/cart.service");
const routerService = require("../service/cart.service");
router.post("/", async (req, res) => {
  await routerService.createCart(req.body);
  res.json({ code: 200, message: "Added to cart successfully", meta: null });
});
router.put("/:id", async (req, res) => {
  const cartItem = await routerService.updateCart(req.params.id, req.body);
  if (cartItem) {
    res.json({
      code: 200,
      message: "Item update successfull",
      result: cartItem,
      meta: null,
    });
  }
});
router.get("/", async (req, res) => {
  const { id } = req.body;
  const cartItem = await cartService.getCartByFilter({ id: id });
  res.json({ code: 200, result: cartItem, meta: null });
});
router.delete("/", async (req, res) => {
  const { id } = req.body;
  const item = await cartService.getCartByFilter({ id: id });
  if (!item) {
    res.json({ code: 404, message: "data not found", meta: null });
  }
  await routerService.deleteCart(id);
  res.json({ code: 200, message: "Deleted data successfully", meta: null });
});

module.exports = router;
