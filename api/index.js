const consola = require("consola");
const app = require("./config/express.config");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
require("dotenv").config();

app.listen(PORT, (err) => {
  err
    ? consola.warn(err)
    : consola.start(`Eclat Server running on port ${PORT}`);
});
