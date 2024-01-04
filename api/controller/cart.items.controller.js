const router = require("express").Router();
const userService = require("../service/user.service");
const { cartItemService } = require("../service/cart.service");

router.post("/:id", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);

    // Retrieve cartid from the user id
    const {
      Cart: [{ id }],
    } = await userService.getUserById(userId);
    const cartId = id;
    console.log(cartId);

    // From the body, it will receive the quantity and product
    const { productId, quantity } = req.body;

    // Create cartItems now
    const cartItem = await cartItemService.createCartItem(
      cartId,
      productId,
      quantity
    );

    res.json({
      code: 200,
      message: `Added to cart items:${cartItem} `,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const cartItemId = parseInt(req.params.id);

    // From the body, it will receive the quantity and product
    const { quantity } = req.body;

    // Update cartItems now
    const cartItem = await cartItemService.updateCartItem(cartItemId, quantity);

    res.json({
      code: 200,
      cartItem: cartItem,
      message: "Updated to cart items",
      meta: null,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    // Call the deleteCartItem method from the service
    const deletedCart = await cartItemService.deleteCartItem(id);

    res.json({
      code: 200,
      message: "Cart deleted successfully",
      meta: deletedCart,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});
module.exports = router;
