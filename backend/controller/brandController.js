const Brand = require("../models/brandModal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

const createBrand = catchAsyncError(async (req, res) => {
  const newBrand = await Brand.create(req.body);
  res.json(newBrand);
});

const updateBrand = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const updateBrand = await Brand.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateBrand) {
    throw new ErrorHandler("No Brand exist against this id", 404);
  }
  res.json(updateBrand);
});

const deleteBrand = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const deletedBrand = await Brand.findByIdAndDelete(id);
  if (!deletedBrand) {
    throw new ErrorHandler("No Brand exist against this id", 404);
  }
  res.json(deletedBrand);
});

const getBrand = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const singleBrand = await Brand.findById(id);
  if (!singleBrand)
    throw new ErrorHandler("No Brand found against this id", 404);

  res.json(singleBrand);
});

const getAllBrand = catchAsyncError(async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
};
