const express = require("express");
const { cartService, cartItemService } = require("../service/cart.service");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { user, cartItems } = req.body;

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
    next(error); // Pass the error to the error handling middleware
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { id, quantity } = req.body;
    let updatedCartItem;

    if (id) {
      // Update only the quantity
      updatedCartItem = await cartItemService.updateCartItem(id, quantity);
    } else {
      updatedCartItem = await cartItemService.createCartItem(quantity);
    }

    res.json({
      code: 200,
      message: "Cart item updated successfully",
      meta: updatedCartItem,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const cartId = parseInt(req.params.id);

    // Call the deleteCart method from the service
    await cartService.deleteCart(cartId);

    res.json({
      code: 200,
      message: "Cart deleted successfully",
      meta: null,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cartId = parseInt(req.params.id);
    const cart = await cartService.getCartById(cartId);

    res.json({
      code: 200,
      message: cart,
      meta: null,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

module.exports = router;
