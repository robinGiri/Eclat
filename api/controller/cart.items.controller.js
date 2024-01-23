const cartItemService = require("../service/cart.item.service");

const addToCart = async (req, res, next) => {
  try {
    const userId = parseInt(req.body.userId);

    // Retrieve cartid from the user id
    const {
      Cart: [{ id }],
    } = await userService.getUserById(userId);
    const cartId = id;

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
      message: `Added to cart items: ${cartItem}`,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
};

const updateCartItem = async (req, res, next) => {
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
};

const deleteCartItem = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

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
};

module.exports = {
  addToCart,
  updateCartItem,
  deleteCartItem,
};
