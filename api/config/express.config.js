const express = require("express");
const { consola } = require("consola");

const app = express();
const route = require("../routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", route);

//handeling 404 error
app.use((req, res, next) => {
  next({ code: 404, message: "Not Found" });
});

//setting all the result have same type of return
app.use((err, req, res, next) => {
  let code = error.code ?? 500;
  let msg = er.message ?? "Internal server Error";
  let result = null;
  res.status(code).json({
    result: null,
    msg: msg,
    meta: null,
  });
});

module.exports = app;
