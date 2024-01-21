const router = require("express").Router();
const returnService = require("../service/returned.product.Service");
const { orderService, orderItemsService } = require("../service/order.service");

router.post("/", async (req, res, next) => {
  try {
    const { OrderId, productId } = req.body;
    const returnItem = returnService.createReturnedOrder(productId, OrderId);
    res.status(201).json({
      code: 201,
      result: returnItem,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/{id}", async (req, res, next) => {
  try {
    const { id } = req.params;
    const returnItem = returnService.getReturnedOrderById(id);
    res.status(200).json({
      code: 200,
      result: returnItem,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
