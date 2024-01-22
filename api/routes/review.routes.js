const router = require("express").Router();
const reviewsController = require("../controller/review.controller");

router.get("/:userId", reviewsController.getReviewsByUserId);

router.post("/", reviewsController.addReview);

router.delete("/", reviewsController.deleteAllReviews);

router.delete("/u/:userId", reviewsController.deleteReviewsByUserId);

router.delete("/r/:id", reviewsController.deleteReviewById);

module.exports = router;
