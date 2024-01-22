const express = require("express");
const cartController = require("../controller/cart.controller");

const router = express.Router();

router.post("/", cartController.createCart);
router.put("/", cartController.updateCartItem);
router.delete("/:id", cartController.deleteCart);
router.get("/:id", cartController.getCartById);

module.exports = router;
