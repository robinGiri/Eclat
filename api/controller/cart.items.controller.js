const cartItemService = require("../service/cart.item.service");
const userService = require("../service/user.service");
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
      parseInt(productId),
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

    if (isNaN(cartItemId)) {
      return res.status(400).json({
        code: 400,
        message: "Invalid cartItemId. It should be a valid number.",
        meta: null,
      });
    }

    // From the body, it will receive the quantity and product
    const { quantity } = req.body;

    // Additional validation for quantity if needed

    // Update cartItems now
    const updatedCartItem = await cartItemService.updateCartItem(cartItemId, { quantity });

    res.json({
      code: 200,
      cartItem: updatedCartItem,
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
    const deletedCartItem = await cartItemService.deleteCartItem(id);

    res.json({
      code: 200,
      message: "CartItem deleted successfully",
      meta: {
        deletedCartItem,
      },
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
