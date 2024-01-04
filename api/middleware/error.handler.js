// middleware/errorHandler.js
const { PrismaClientKnownRequestError } = require("@prisma/client");
const errorHandler = (err, req, res, next) => {
  console.log(err);
  const { code, message } = err;

  // Handle Prisma-specific errors
  if (err instanceof PrismaClientKnownRequestError) {
    return res.status(400).json({
      code: 400,
      message: "Bad Request: Prisma error",
      details: err.meta, // Include Prisma error details if needed
      meta: null,
    });
  }

  // Handle Not Found
  if (code == 404) {
    return res.status(404).json({
      code: code,
      message: message,
      meta: null,
    });
  }

  // Handle Authentication Error
  if (code == 401) {
    return res.status(401).json({
      code: code,
      message: "Authentication Failed",
      meta: null,
    });
  }

  // Handle other errors with a generic message
  res
    .status(500)
    .json({ code: 500, message: "Internal Server Error", meta: null });
};

module.exports = errorHandler;
