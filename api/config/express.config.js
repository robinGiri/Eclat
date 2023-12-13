const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
=======
const { consola } = require("consola");
>>>>>>> main
const path = require("path");

const app = express();
const BASE_URL = "/api/v1";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public/uploads")));

app.use(`${BASE_URL}/product`, require("../controller/product.controller"));
<<<<<<< HEAD
app.use(`${BASE_URL}/user`, require("../controller/user.controller"));
=======
>>>>>>> main

app.use((error, req, res, next) => {
  const code = error.code || 500;
  const message = error.message || "Internal Server Error";

  res.status(code).json({
    message,
  });
});

module.exports = app;
