const Product = require("../models/productModal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const slugify = require("slugify");
const User = require("../models/userMoadal");
const cloudinaryUploadImg = require("../utils/cloudinary");
const fs = require("fs");

exports.createProduct = catchAsyncError(async (req, res, next) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
});

exports.getProdut = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const findProduct = await Product.findById(id);
  if (!findProduct) {
    throw new ErrorHandler("Product not found!", 404);
  }
  res.json(findProduct);
});

exports.getAllProduct = catchAsyncError(async (req, res) => {
  const queryObj = { ...req.query };
  const excludeFields = ["page", "sort", "limit", "fields"];
  excludeFields.forEach((filterKey) => delete queryObj[filterKey]);
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`); //make mongo query
  let query = Product.find(JSON.parse(queryStr));

  //sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("createdAt");
  }

  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }

  //pagination
  const page = req.query.page;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);
  if (req.query.page) {
    const productCount = await Product.countDocuments();
    if (skip > productCount) {
      throw new ErrorHandler("This page does not exist!!", 404);
    }
  }

  const product = await query;
  res.json(product);
});

exports.updateProduct = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateProduct) {
    throw new ErrorHandler("Something went wrong! Product not updated.", 403);
  }
  res.json(updateProduct);
});

exports.deleteProduct = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  if (!deleteProduct) {
    throw new ErrorHandler("Something went wrong! Product not deleted.", 403);
  }
  res.json({
    message: "Product deleted successfully!",
  });
});

exports.rating = catchAsyncError(async (req, res) => {
  const { _id } = req.user;
  const { star, productId, comment } = req.body;
  const product = await Product.findById(productId);
  if (!product) {
    throw new ErrorHandler("No product exist against this id", 404);
  }

  let alreadyrated = product.ratings.find(
    (userId) => userId.postedby.toString() === _id.toString()
  );

  if (alreadyrated) {
    const updateRating = await Product.updateOne(
      {
        ratings: { $elemMatch: alreadyrated },
      },
      {
        $set: { "ratings.$.star": star, "ratings.$.comment": comment },
      },
      {
        new: true,
      }
    );
  } else {
    const rateProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $push: {
          ratings: {
            star: star,
            postedby: _id,
            comment: comment,
          },
        },
      },
      {
        new: true,
      }
    );
  }

  const getAllRatings = await Product.findById(productId);
  let totalRating = getAllRatings.ratings.length;
  let ratingsSum = getAllRatings.ratings
    .map((item) => item.star)
    .reduce((prev, curr) => prev + curr, 0);

  let actualRating = Math.round(ratingsSum / totalRating);
  let finalProduct = await Product.findByIdAndUpdate(
    productId,
    {
      totalratings: actualRating,
    },
    {
      new: true,
    }
  );
  res.json(finalProduct);
});

exports.uploadImages = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const uploader = (path) => cloudinaryUploadImg(path, "images");
  const urls = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file;
    const newpath = await uploader(path);
    urls.push(newpath);
    fs.unlinkSync(path);
  }
  const findProduct = await Product.findByIdAndUpdate(
    id,
    {
      images: urls.map((file) => {
        return file;
      }),
    },
    {
      new: true,
    }
  );
  res.json(findProduct);
});
