const wishlistService = require("../service/wishlist.service");

const getWishlistByUserID = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const wishlist = await wishlistService.getByUserID(userId);
    res.json({
      code: 200,
      message: "Wishlist items retrieved successfully",
      data: wishlist,
    });
  } catch (error) {
    next(error);
  }
};

const addToWishlist = async (req, res, next) => {
  try {
    const { productId, userId } = req.body;
    const wish = await wishlistService.add(productId, userId);

    res.json({
      code: 200,
      message: "Wishlist item added successfully",
      data: wish,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAllWishlists = async (req, res, next) => {
  try {
    await wishlistService.deleteAll();

    res.json({
      code: 200,
      message: "All Wishlists Deleted Successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

const deleteWishlistsByUserID = async (req, res, next) => {
  try {
    await wishlistService.deleteAllByUserID(req.params.userId);
    res.json({
      code: 200,
      message: "User Wishlists Deleted Successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

const deleteWishlistById = async (req, res, next) => {
  try {
    await wishlistService.deleteById(req.params.id);
    res.json({
      code: 200,
      message: "Wishlist Deleted Successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWishlistByUserID,
  addToWishlist,
  deleteAllWishlists,
  deleteWishlistsByUserID,
  deleteWishlistById,
};
