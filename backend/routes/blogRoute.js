const express = require("express");
const {
  createBlog,
  updateBlog,
  getSingleBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
} = require("../controller/blogController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createBlog);
router.put("/update/:id", authMiddleware, isAdmin, updateBlog);
router.get("/singleBlog/:id", getSingleBlog);
router.get("/allBlogs", getAllBlogs);
router.delete("/deleteBlog/:id", authMiddleware, isAdmin, deleteBlog);
router.put("/likeBlog/:blogId", authMiddleware, likeBlog);
router.put("/disLikeBlog/:blogId", authMiddleware, dislikeBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  uploadImages
);
module.exports = router;
