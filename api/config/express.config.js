const express = require("express");
const cors = require("cors");

const { consola } = require("consola");
const path = require("path");

const app = express();
const BASE_URL = "/api/v1";
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  `${BASE_URL}/uploads`,
  express.static(path.join(__dirname, "..", "public/uploads"))
);

app.use(`${BASE_URL}/pay-verify/`, require("../controller/payment.controller"));
app.use(`${BASE_URL}/product`, require("../controller/product.controller"));
app.use(`${BASE_URL}/cart`, require("../controller/cart.controller"));

app.use(
  `${BASE_URL}/uploads`,
  express.static(path.join(__dirname, "..", "public", "uploads"))
);

app.use(`${BASE_URL}/user`, require("../controller/user.controller"));
app.use((error, req, res, next) => {
  const code = error.code || 500;
  const message = error.message || "Internal Server Error";

  res.status(code).json({
    message,
  });
});

app.get("/", (req, res) => {
  res.send("I am a server");
});

const sendMail = require("../helper/sendMail")
app.get("/send-email", sendMail)
app.post('/send-email', sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Email server is live on", PORT);
    });
  } catch (error) {
    console.error("Email server error:", error);
  }
};

start();

module.exports = app;
