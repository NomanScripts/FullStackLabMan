const express = require("express");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
} = require("../controller/brandController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createBrand);
router.put("/update/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/singleBrand/:id", authMiddleware, isAdmin, getBrand);
router.get("/allBrands", authMiddleware, isAdmin, getAllBrand);

module.exports = router;
