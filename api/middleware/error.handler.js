const { PrismaClientKnownRequestError } = require("@prisma/client");
const { ZodError } = require("zod");
const jwt = require("jsonwebtoken");

const errorHandler = (err, req, res, next) => {
  console.log(err);
  let { code, message } = err;

  // Handle Prisma-specific errors
  if (err instanceof PrismaClientKnownRequestError) {
    return res.status(400).json({
      code: 400,
      message: "Bad Request: Prisma error",
      details: err.meta, // Include Prisma error details if needed
      meta: null,
    });
  }

  // Handle Zod error
  if (err instanceof ZodError) {
    // Validation exception
    let errorMsg = {};
    err.errors.map((errorObj) => {
      errorMsg[errorObj.path[0]] = errorObj.message;
    });
    code = 400;
    message = errorMsg;
  }

  // Handle JWT errors
  if (err instanceof jwt.JsonWebTokenError) {
    return res.status(401).json({
      code: 401,
      message: "Invalid token",
      meta: null,
    });
  }

  // Handle JWT expiration errors
  if (err instanceof jwt.TokenExpiredError) {
    return res.status(401).json({
      code: 401,
      message: "Token has expired",
      meta: null,
    });
  }

  // Handle Not Found
  if (code === 404) {
    return res.status(404).json({
      code,
      message,
      meta: null,
    });
  }

  // Handle Authentication Error
  if (code === 401) {
    return res.status(401).json({
      code,
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
