const express = require("express");
const wishlistController = require("../controller/wishlist.controller");

const router = express.Router();

// Read Wishlist by User ID
router.get("/:userId", wishlistController.getWishlistByUserID);

// Add to Wishlist
router.post("/", wishlistController.addToWishlist);

// Delete All Wishlists
router.delete("/", wishlistController.deleteAllWishlists);

// Delete User Wishlists
router.delete("/u/:userId", wishlistController.deleteWishlistsByUserID);

// Delete Wishlist by ID
router.delete("/w/:id", wishlistController.deleteWishlistById);

module.exports = router;
