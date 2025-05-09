const Blog = require("../models/blogModal");
const User = require("../models/userMoadal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const cloudinaryUploadImg = require("../utils/cloudinary");
const fs = require("fs");
const createBlog = catchAsyncError(async (req, res) => {
  const newBlog = await Blog.create(req.body);
  res.json(newBlog);
});

const updateBlog = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const updateBlog = await Blog.findByIdAndUpdate(
    id,
    req.body,
    {},
    {
      new: true,
    }
  );
  if (!updateBlog) {
    throw new ErrorHandler("No blog exist against this id", 404);
  }
  res.json(updateBlog);
});

const getSingleBlog = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const singleBlog = await Blog.findById(id);
  if (!singleBlog) {
    throw new ErrorHandler("No blog found against this id.", 404);
  }
  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    {
      $inc: { numViews: 1 },
    },
    {
      new: true,
    }
  )
    .populate("likes")
    .populate("disLikes");

  res.json(updatedBlog);
});

const getAllBlogs = catchAsyncError(async (req, res) => {
  const getBlogs = await Blog.find();
  res.json(getBlogs);
});

const deleteBlog = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const deleteBlog = await Blog.findByIdAndDelete(id);
  if (!deleteBlog) {
    throw new ErrorHandler("No blog exist against this id", 404);
  }
  res.json({
    message: "Blog deleted successfully!!",
  });
});

const likeBlog = catchAsyncError(async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new ErrorHandler("No blog found against this id.", 404);
  }

  const loginUserId = req?.user?._id;
  const isLiked = blog?.likes?.some(
    (like) => like.toString() === loginUserId.toString()
  );
  const alreadyDisLiked = blog?.disLikes?.find(
    (disLike) => disLike?.toString() === loginUserId?.toString()
  );

  if (alreadyDisLiked) {
    await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { disLikes: loginUserId },
        isDisLiked: false,
      },
      {
        new: true,
      }
    );
  }

  if (isLiked) {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(updatedBlog);
  } else {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      {
        new: true,
      }
    );
    res.json(updatedBlog);
  }
});

const dislikeBlog = catchAsyncError(async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new ErrorHandler("No blog found against this id.", 404);
  }

  const loginUserId = req?.user?._id;
  const isdisLiked = blog?.disLikes?.some(
    (disLike) => disLike.toString() === loginUserId.toString()
  );
  const alreadyLiked = blog?.likes?.find(
    (Like) => Like?.toString() === loginUserId?.toString()
  );

  if (alreadyLiked) {
    await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
  }

  if (isdisLiked) {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { disLikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(updatedBlog);
  } else {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { disLikes: loginUserId },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
    res.json(updatedBlog);
  }
});

const uploadImages = catchAsyncError(async (req, res) => {
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
  const findBlog = await Blog.findByIdAndUpdate(
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

  res.json(findBlog);
});

module.exports = {
  createBlog,
  updateBlog,
  getSingleBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
};
