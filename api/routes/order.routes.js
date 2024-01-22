const express = require("express");
const orderController = require("../controller/order.controller");

const router = express.Router();

router.post("/:id", orderController.createOrder);
router.put("/", orderController.updateCartItem);
router.delete("/:id", orderController.deleteCart);
router.get("/:id", orderController.getCartById);
router.get("/", orderController.getAllOrderItems);
router.get("/customer/:id", orderController.getOrderByCustomerId);
router.get("/", orderController.getAllOrderItems);

module.exports = router;
