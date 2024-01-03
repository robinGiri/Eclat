// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Handle specific types of errors
  //   if (err instanceof YourCustomError) {
  //     return res
  //       .status(400)
  //       .json({ code: 400, message: err.message, meta: null });
  //   }

  // Handle other errors with a generic message
  res
    .status(500)
    .json({ code: 500, message: "Internal Server Error", meta: null });
};

module.exports = errorHandler;
