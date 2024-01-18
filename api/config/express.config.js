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

// app.use(`${BASE_URL}/pay-verify/`, require("../controller/payment.controller"));
//Paths to handel controller
app.use(`${BASE_URL}`, require("../routes/main.routes"));

//Error handeling
app.use(errorHandler);

// services for email
app.get("/send-email", require("../helper/sendMail"));
app.post("/send-email", require("../helper/sendMail"));
app.get("/send-email-to-all", require("../helper/sendMailToAll"));
app.post("/send-email-to-all", require("../helper/sendMailToAll"));

module.exports = app;
