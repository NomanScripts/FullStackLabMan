const Coupon = require("../models/couponModal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

const createCoupon = catchAsyncError(async (req, res) => {
  const newCoupon = await Coupon.create(req.body);
  res.json(newCoupon);
});

const getAllCoupons = catchAsyncError(async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
});

const updateCoupon = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedCoupon) {
    throw new ErrorHandler("No coupon exist against this id.", 404);
  }
  res.json(updatedCoupon);
});

const deleteCoupon = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const deletedCoupon = await Coupon.findByIdAndDelete(id);
  res.json(deletedCoupon);
});

module.exports = { createCoupon, getAllCoupons, updateCoupon, deleteCoupon };
