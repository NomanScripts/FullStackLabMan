const express = require("express");
const {
  createProduct,
  getProdut,
  getAllProduct,
  updateProduct,
  deleteProduct,
  rating,
  uploadImages,
} = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createProduct);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),

  uploadImages
);
router.get("/singleProduct/:id", getProdut);
router.get("/allProducts", getAllProduct);
router.put("/updateProduct/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/deleteProduct/:id", authMiddleware, isAdmin, deleteProduct);
router.put("/rating", authMiddleware, rating);
module.exports = router;
