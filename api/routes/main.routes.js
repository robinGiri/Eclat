require("dotenv").config();
const router = require("express").Router();

//product controller
router.use(`/product`, require("./product.routes"));

//cart controller
router.use(`/cart`, require("./cart.routes"));

//user controller
router.use(`/user`, require("./user.routes"));

//order controller
router.use(`/order`, require("./order.routes"));

//cartItem controller
router.use(`/cartItem`, require("./cart.item.routes"));

//season controller
router.use(`/season`, require("./season.routes"));

//setting controller
router.use(`/setting`, require("./setting.routes"));

//home controller
// router.use(`/home`, require(""));

//purchase controller
router.use(`/purchase`, require("./purchase.routes"));

//shipping controller
router.use(`/shipping`, require("./sipping.routes"));

//wishlist controller
router.use(`/wishlist`, require("./wishlist.routes"));

//strip-payment controller
router.use(`/strip-payment`, require("../controller/strip.payment"));

//return controller
router.use(`/return`, require("./return.routes"));

//voucher controller
router.use(`/voucher`, require("./voucher.routes"));

module.exports = router;
