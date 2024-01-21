require("dotenv").config();
const router = require("express").Router();

//product controller
router.use(`/product`, require("../controller/product.controller"));

//cart controller
router.use(`/cart`, require("../controller/cart.controller"));

//user controller
router.use(`/user`, require("../controller/user.controller"));

//order controller
router.use(`/order`, require("../controller/order.controller"));

//cartItem controller
router.use(`/cartItem`, require("../controller/cart.items.controller"));

//season controller
router.use(`/season`, require("../controller/season.controller"));

//setting controller
router.use(`/setting`, require("../controller/setting.controller"));

//home controller
router.use(`/home`, require("../controller/home.controller"));

//purchase controller
router.use(`/purchase`, require("../controller/purchase.controller"));

//shipping controller
router.use(`/shipping`, require("../controller/shipping.controller"));

//wishlist controller
router.use(`/wishlist`, require("../controller/wishlist.controller"));

//strip-payment controller
router.use(`/strip-payment`, require("../controller/strip.payment"));

//return controller
router.use(`/return`, require("../controller/return.controller"));

//voucher controller
router.use(`/voucher`, require("../controller/voucher.controller"));

module.exports = router;
