const router = require("express").Router();
const { cartService, cartItemService } = require("../service/cart.service");
router.post("/", async (req, res) => {
  try {
    const { user, cartItems } = req.body;
    console.log(req.body);

    // Check if the user already has a cart
    const existingCart = await cartService.getCartByUser(user);

    if (existingCart) {
      // If the user has an existing cart, add cart items to it
      const modifiedCartItems = cartItems.items.map((item) => ({
        ...item,
        cartId: existingCart.id,
      }));

      const createdCartItems = await cartItemService.createCartItem(
        modifiedCartItems
      );

      res.json({
        code: 200,
        message: "Cart items added to the existing cart",
        meta: createdCartItems,
      });
    } else {
      // If the user does not have an existing cart, create a new cart and add cart items
      const { id: cartId } = await cartService.createCart(user);

      const modifiedCartItems = cartItems.items.map((item) => ({
        ...item,
        cartId: cartId,
      }));

      const createdCartItems = await cartItemService.createCartItem(
        modifiedCartItems
      );

      res.json({
        code: 200,
        message: "Cart and cart items created successfully",
        meta: createdCartItems,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      meta: null,
    });
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
    const { id } = req.params;
    const { cartItemIds } = req.body;

    // Delete each cart item using the CartItemService
    for (const cartItemId of cartItemIds) {
      await cartItemService.deleteCartItem(cartItemId);
    }

    // After deleting cart items, check if the cart is empty
    const cart = await cartService.getCartById(id);

    if (cart.cartItems.length === 0) {
      // If there are no more cart items, delete the cart
      await cartService.deleteCart(id);

      res.json({
        code: 200,
        message: "Cart and cart items deleted successfully",
        meta: null,
      });
    } else {
      res.json({
        code: 200,
        message: "Cart items deleted successfully",
        meta: null,
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ code: 500, message: "Internal Server Error", meta: null });
  }
});

router.get("/:id/cartitems", async (req, res) => {
  try {
    const { id } = req.params;

    // Call the getCartItemsByCartId method from the CartService
    const cartItems = await cartService.getCartItemsByCartId(id);

    res.json({
      code: 200,
      message: "Cart items fetched successfully",
      meta: cartItems,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ code: 500, message: "Internal Server Error", meta: null });
  }
});
module.exports = router;
