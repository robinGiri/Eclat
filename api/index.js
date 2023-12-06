const { consola } = require("consola");
const app = require("./config/express.config");
require("dotenv").config();
const port = process.env.PORT;

app.listen(port, (err) => {
  err ? consola.warn(err) : consola.start(`Server is running on port ${port}`);
});
