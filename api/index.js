const express = require("express");
const app = express();
const { consola } = require("consola");
require("dotenv").config();
const route = require("./routes");
const db = require("./config/databaseConfig");
const port = process.env.PORT;

app.use(express.json());

db.connect((err) => {
  err ? consola.error(err) : consola.success("Database connection successful");
});

app.use("/api/v1", route);
app.listen(port, (err) => {
  err ? consola.warn(err) : consola.start(`Server is running on port ${port}`);
});
