import ErrorHandler from "../utils/errorHandler.js";

export const errorListening = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";

  //jsonwebtoken error
  if (err.name === "JsonWebTokenError") {
    const message = `Invalid token, try again!`;
    err = new ErrorHandler(message, 400);
  }

  //token expired
  if (err.name === "TokenExpiredError") {
    const message = `Token has been expired!`;
    err = new ErrorHandler(message, 400);
  }

  //multerError
  if (err.name === "MulterError") {
    const message = `Error uploading file:${err.message}`;
    err = new ErrorHandler(message, 400);
  }

  //ENOTFOUND
  if (err.name === "ENOTFOUND") {
    const message = `Connection Error: Unable to connect the server!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
