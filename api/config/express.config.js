const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const errorHandler = require("../middleware/error.handler");

const app = express();
const BASE_URL = "/api/v1";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handel static file
app.use(
  `${BASE_URL}/uploads`,
  express.static(path.join(__dirname, "..", "public", "uploads"))
);

//cookie parser
app.use(cookieParser());

//controller paths

// app.use(`${BASE_URL}/pay-verify/`, require("../controller/payment.controller"));
app.use(`${BASE_URL}/product`, require("../controller/product.controller"));
app.use(`${BASE_URL}/cart`, require("../controller/cart.controller"));
app.use(`${BASE_URL}/user`, require("../controller/user.controller"));
app.use(`${BASE_URL}/order`, require("../controller/order.controller"));
app.use(`${BASE_URL}/cartItem`, require("../controller/cart.items.controller"));
app.use(`${BASE_URL}/season`, require("../controller/season.controller"));
app.use(`${BASE_URL}/setting`, require("../controller/setting.controller"));
app.use(`${BASE_URL}/home`, require("../controller/home.controller"));
app.use(`${BASE_URL}/purchase`, require("../controller/purchase.controller"));
app.use(`${BASE_URL}/shipping`, require("../controller/shipping.controller"));
app.use(`${BASE_URL}/strip-payment`, require("../controller/strip.payment"));
app.use(`${BASE_URL}/return`, require("../controller/return.controller"));

//error handeler
app.use(`${BASE_URL}/wishlist`, require("../controller/wishlist.controller"));
app.use(`${BASE_URL}/review`, require("../controller/review.controller"));
//service runner

app.use(errorHandler);

app.get("/send-email", require("../helper/sendMail"));
app.post("/send-email", require("../helper/sendMail"));
app.get("/send-email-to-all", require("../helper/sendMailToAll"));
app.post("/send-email-to-all", require("../helper/sendMailToAll"));

module.exports = app;
