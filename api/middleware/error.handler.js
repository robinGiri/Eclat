// middleware/errorHandler.js
const { PrismaClientKnownRequestError } = require("@prisma/client");
const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Handle Prisma-specific errors
  if (err instanceof PrismaClientKnownRequestError) {
    return res.status(400).json({
      code: 400,
      message: "Bad Request: Prisma error",
      details: err.meta, // Include Prisma error details if needed
      meta: null,
    });
  }

  // Handle other errors with a generic message
  res
    .status(500)
    .json({ code: 500, message: "Internal Server Error", meta: null });
};

module.exports = errorHandler;
