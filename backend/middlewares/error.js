const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Handle Mongoose duplicate key error
  if (err.code === 11000) {
    const duplicateField = Object.keys(err.keyValue).join(", "); // Get the field(s) causing the duplication
    const message = `Duplicate value entered for field(s): ${duplicateField}.`;
    err = new ErrorHandler(message, 409); // Set status code to 409 for conflict
  }

  // Handle CastError for invalid types
  if (err.name === "CastError") {
    const message = `Invalid value for field: ${err.path}.`;
    err = new ErrorHandler(message, 400); // Bad request
  }

  // Handle validation errors
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    const message = `Validation failed: ${messages.join(", ")}`;
    err = new ErrorHandler(message, 400); // Bad request
  }

  // Handle 404 errors
  if (err.status === 404) {
    const message = `Not Found: ${req.originalUrl}`;
    err = new ErrorHandler(message, 404);
  }

  // Send the error response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
