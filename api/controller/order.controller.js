const router = require("express").Router();
const { orderItemsService, orderService } = require("../service/order.service");
const { cartService, cartItemService } = require("../service/cart.service");
router.post("/:id", async (req, res) => {
  try {
    let OrderItems;
    //extract cart id
    const cartId = parseInt(req.params.id);
    //create order table
    const { userId } = req.body;
    const data = {
      userId: userId,
    };
    const { id } = await orderService.createOrder(data);

    const orderId = id;

    //extract cart items from cart id
    const { cartItems } = await cartService.getCartById(cartId);

    cartItems.map((item) => {
      const { id, cartId, productId, quantity } = item;
      console.log(cartId);
      orderItemsService.createOrderItem(orderId, productId, quantity);
      cartItemService.deleteCartItem(id);
    });

    res.json({
      code: 200,
      message: OrderItems,
      meta: null,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ code: 500, message: "Internal Server Error", meta: null });
  }
});
router.put("/", async (req, res) => {
  try {
    const { id, quantity } = req.body;
    if (id) {
      // Update only the quantity
      const updatedCartItem = await cartItemService.updateCartItem(
        id,
        quantity
      );
    } else {
      const updateCartItem = cartItemService.createCartItem(quantity);
    }

    res.json({
      code: 200,
      message: "Cart item updated successfully",
      meta: updatedCartItem,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ code: 500, message: "Internal Server Error", meta: null });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const cartId = parseInt(req.params.id);

    // Call the deleteCart method from the service
    const deletedCart = await cartService.deleteCart(cartId);

    res.json({
      code: 200,
      message: "Cart deleted successfully",
      meta: null,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ code: 500, message: "Internal Server Error", meta: null });
  }
});
router.get("/:id", async (req, res) => {
  const cartId = parseInt(req.params.id);
  const cart = await cartService.getCartById(cartId);
  res.json({
    code: 200,
    message: cart,
    meta: null,
  });
});
router.get("/allproduct", async (req, res) => {
  console.log("Get by product and order");
  const jointable = await orderItemsService.getOrdersWithProducts();
  res.json({
    code: 200,
    message: jointable,
    meta: null,
  });
});

module.exports = router;
