const jwt = require("jsonwebtoken");
const User = require("../models/userMoadal");
const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");

const authMiddleware = catchAsyncError(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new ErrorHandler("Authorization header is missing", 401));
  }
  if (!authHeader.startsWith("Bearer ")) {
    return next(new ErrorHandler("Invalid authorization format", 401));
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return next(new ErrorHandler("Token not found", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 401));
  }
  req.user = user;
  next();
});

const isAdmin = catchAsyncError(async (req, res, next) => {
  const { email } = req.user;
  const findUser = await User.findOne({ email });
  if (findUser.role.toLocaleLowerCase() !== "admin") {
    throw new ErrorHandler("You are not an admin", 401);
  } else {
    next();
  }
});

module.exports = { authMiddleware, isAdmin };
