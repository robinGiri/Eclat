const express = require("express");
const cors = require("cors");
const { consola } = require("consola");
const path=require("path");

const app = express();
const BASE_URL = '/api/v1'

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${BASE_URL}/product`, require('../controller/product.controller'));
app.use(`${BASE_URL}/uploads`, express.static(path.join(__dirname, "..", "public", "uploads")));

app.use((error, req, res, next) => {
  const code = error.code || 500;
  const message = error.message || "Internal Server Error";

  res.status(code).json({
    message,
  });
});

module.exports = app;
