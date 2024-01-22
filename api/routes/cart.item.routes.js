const express = require("express");
const cartItemController = require("../controller/cart.items.controller");

const router = express.Router();

router.post("/", cartItemController.addToCart);
router.put("/:id", cartItemController.updateCartItem);
router.delete("/:id", cartItemController.deleteCartItem);

module.exports = router;
