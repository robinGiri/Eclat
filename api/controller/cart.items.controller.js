const router = require("express").Router();
const userService = require("../service/user.service");
const { cartItemService } = require("../service/cart.service");
router.post("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    //retrive cartid from the user id
    const {
      Cart: [{ id }],
    } = await userService.getUserById(userId);
    const cartId = id;
    console.log(cartId);

    //from the body it will receive the quantity and product
    const { productId, quantity } = req.body;

    //create cartItems now
    const cartItem = await cartItemService.createCartItem(
      cartId,
      productId,
      quantity
    );

    res.json({
      code: 200,
      //   cartItem: cartItem,
      message: "Added to cart items",
      meta: null,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Internal Server Error: " + error,
      meta: null,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const cartItemId = parseInt(req.params.id);

    //retrive cartid from the user id

    //from the body it will receive the quantity and product
    const { quantity } = req.body;

    //create cartItems now
    const cartItem = await cartItemService.updateCartItem(cartItemId, quantity);

    res.json({
      code: 200,
      cartItem: cartItem,
      message: "Updated to cart items",
      meta: null,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Internal Server Error: " + error,
      meta: null,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Call the deleteCart method from the service
    const deletedCart = await cartItemService.deleteCartItem(id);

    res.json({
      code: 200,
      message: "Cart deleted successfully",
      meta: deletedCart,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ code: 500, message: "Internal Server Error", meta: null });
  }
});
module.exports = router;
