const router = require("express").Router();
const userService = require("../service/user.service");
const { add, getByUserID, deleteAll, deleteAllByUserID, deleteById } = require("../service/wishlist.service");

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
      const wishlist = await getByUserID(userId);
      res.json({
        code: 200,
        message: "Wishlist items retrieved successfully",
        data: wishlist,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  });

router.post("/", async (req, res) => {
    try {
        const { productId, userId } = req.body;
        const wish = await add(productId, userId);
    
        res.json({
          code: 200,
          message: "Wishlist item added successfully",
          data: wish,
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
              message: "All Wishlists Deleted Successfully",
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
          message: "User Wishlists Deleted Successfully",
          data: null,
        });
      } catch (error) {
        errorHandler(res, error);
      }
});

router.delete("/w/:id", async (req, res) => {
    try {
        await deleteById(req.params.id);
        res.json({
          code: 200,
          message: "Wishlist Deleted Successfully",
          data: null,
        });
      } catch (error) {
        errorHandler(res, error);
      }
});
module.exports = router;
