const router = require("express").Router();
const { orderItemsService, orderService } = require("../service/order.service");
router.post("/", async (req, res) => {
  try {
    const { user, cartItems } = req.body;
    console.log(req.body);

    // Create a new cart for the user
    const { id: cartId } = await cartService.createCart(user);

    // Modify cartItems to include the cartId
    const modifiedCartItems = cartItems.items.map((item) => ({
      ...item,
      cartId: cartId,
    }));

    // Create cart items associated with the newly created cart
    const createdCartItems = await cartItemService.createCartItem(
      modifiedCartItems
    );

    res.json({
      code: 200,
      message: "Cart and cart items created successfully",
      meta: createdCartItems,
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

module.exports = router;
