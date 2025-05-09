const Category = require("../models/categoryModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const createCategory = catchAsyncError(async (req, res) => {
  const newCategory = await Category.create(req.body);
  res.json(newCategory);
});

const updateCategory = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateCategory) {
    throw new ErrorHandler("No category exist against this id", 404);
  }
  res.json(updateCategory);
});

const deleteCategory = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const deletedCategory = await Category.findByIdAndDelete(id);
  if (!deletedCategory) {
    throw new ErrorHandler("No category exist against this id", 404);
  }
  res.json(deletedCategory);
});

const getCategory = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const singleCategory = await Category.findById(id);
  if (!singleCategory)
    throw new ErrorHandler("No category found against this id", 404);

  res.json(singleCategory);
});

const getAllCategories = catchAsyncError(async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategories,
};
