const reviewsService = require("../service/reviews.service");

const errorHandler = (res, error) => {
  console.error(error);
  res.status(500).json({
    code: 500,
    message: "Internal Server Error",
  });
};

// Get Reviews by User ID
const getReviewsByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const reviews = await reviewsService.getByUserID(userId);
    res.json({
      code: 200,
      message: "Wishlist items retrieved successfully",
      data: reviews,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// Add Review
const addReview = async (req, res) => {
  try {
    const { productId, userId } = req.body;
    const review = await reviewsService.add(productId, userId);

    res.json({
      code: 200,
      message: "Review added successfully",
      data: review,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// Delete All Reviews
const deleteAllReviews = async (req, res) => {
  try {
    await reviewsService.deleteAll();

    res.json({
      code: 200,
      message: "All Reviews Deleted Successfully",
      data: null,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// Delete Reviews by User ID
const deleteReviewsByUserId = async (req, res) => {
  try {
    await reviewsService.deleteAllByUserID(req.params.userId);
    res.json({
      code: 200,
      message: "User Review Deleted Successfully",
      data: null,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

// Delete Review by ID
const deleteReviewById = async (req, res) => {
  try {
    await reviewsService.deleteById(req.params.id);
    res.json({
      code: 200,
      message: "Review Deleted Successfully",
      data: null,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  getReviewsByUserId,
  addReview,
  deleteAllReviews,
  deleteReviewsByUserId,
  deleteReviewById,
};
