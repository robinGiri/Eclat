const express = require("express");
const cors = require("cors");

const path = require("path");

const app = express();
const BASE_URL = "/api/v1";

const errorHandler = require("../middleware/error.handler");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handel static file

app.use(
  `${BASE_URL}/uploads`,
  express.static(path.join(__dirname, "..", "public/uploads"))
);
app.use(
  `${BASE_URL}/uploads`,
  express.static(path.join(__dirname, "..", "public", "uploads"))
);

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

//service runner

app.use(errorHandler);

app.get("/send-email", require("../helper/sendMail"));
app.post("/send-email", require("../helper/sendMail"));
app.get("/send-email-to-all", require("../helper/sendMailToAll"));
app.post("/send-email-to-all", require("../helper/sendMailToAll"));

module.exports = app;
