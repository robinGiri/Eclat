const orderItemsService = require("../service/order.item.service");
const orderService = require("../service/order.service");
const cartService = require("../service/cart.service");
const cartItemService = require("../service/cart.item.service");

const createOrder = async (req, res, next) => {
  try {
    const cartId = parseInt(req.params.id);
    const { voucherId, userId } = req.body;

    // Create order table
    const orderData = {
      userId: userId,
      voucherId: voucherId,
    };
    const { id: orderId } = await orderService.createOrder(orderData);

    // Extract cart items from cart id
    const { cartItems } = await cartService.getCartById(cartId);

    // Create order items and delete cart items
    cartItems.forEach(async (item) => {
      const { id: cartItemId, productId, quantity } = item;
      await orderItemsService.createOrderItem(orderId, productId, quantity);
      await cartItemService.deleteCartItem(cartItemId);
    });

    res.json({
      code: 200,
      message: "Order and OrderItems created successfully",
      meta: null,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateCartItem = async (req, res, next) => {
  try {
    const { id, quantity } = req.body;
    let updatedCartItem;

    if (id) {
      // Update only the quantity
      updatedCartItem = await cartItemService.updateCartItem(id, quantity);
    } else {
      // If no id provided, create a new cart item
      updatedCartItem = await cartItemService.createCartItem(quantity);
    }

    res.json({
      code: 200,
      message: "Cart item updated successfully",
      meta: updatedCartItem,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteCart = async (req, res, next) => {
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
    console.error(error);
    next(error);
  }
};

const getCartById = async (req, res, next) => {
  try {
    const cartId = parseInt(req.params.id);
    const cart = await cartService.getCartById(cartId);

    if (!cart) {
      throw new KnownError(404, "Cart not found");
    }

    res.json({
      code: 200,
      message: cart,
      meta: null,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

const getAllOrderItems = async (req, res, next) => {
  try {
    const orderItems = await orderItemsService.getAllOrderItems();

    res.json({
      orderItems,
      code: 200,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
};

const getOrderByCustomerId = async (req, res, next) => {
  try {
    const order = await orderService.getOrderBycustomerId(req.params.id);
    res.json({
      order,
      code: 200,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  updateCartItem,
  deleteCart,
  getCartById,
  getAllOrderItems,
  getOrderByCustomerId,
};
