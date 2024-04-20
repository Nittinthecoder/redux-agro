const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongo db id
  if (err.name === "CastError") {
    const message = `Resources not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //duplicate Key
  if (err.code === 11000) {
    const message = `Duplicate key --> ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt Key
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid. Try again!!!`;
    err = new ErrorHandler(message, 400);
  }

  //jwt expired
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is expired. Try again!!!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
