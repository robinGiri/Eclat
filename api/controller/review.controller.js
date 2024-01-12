const router = require("express").Router();
const { add, getByUserID, deleteAll, deleteAllByUserID, deleteById } = require("../service/reviews.service");

const errorHandler = (res, error) => {
    console.error(error);
    res.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
};

router.get("/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const reviews = await getByUserID(userId);
      res.json({
        code: 200,
        message: "Wishlist items retrieved successfully",
        data: reviews,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  });

router.post("/", async (req, res) => {
    try {
        const { productId, userId } = req.body;
        const review = await add(productId, userId);
    
        res.json({
          code: 200,
          message: "Review added successfully",
          data: review,
        });
      } catch (error) {
        errorHandler(res, error);
      }
});

router.delete("/", async (req, res) => {
        try {
            await deleteAll();
        
            res.json({
              code: 200,
              message: "All Reviews Deleted Successfully",
              data: null,
            });
          } catch (error) {
            errorHandler(res, error);
          }
});

router.delete("/u/:userId", async (req, res) => {
    try {
        await deleteAllByUserID(req.params.userId);
        res.json({
          code: 200,
          message: "User Review Deleted Successfully",
          data: null,
        });
      } catch (error) {
        errorHandler(res, error);
      }
});

router.delete("/r/:id", async (req, res) => {
    try {
        await deleteById(req.params.id);
        res.json({
          code: 200,
          message: "Review Deleted Successfully",
          data: null,
        });
      } catch (error) {
        errorHandler(res, error);
      }
});
module.exports = router;
