const express = require("express");
const {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createCoupon);
router.get("/allCoupons", getAllCoupons);
router.put("/update/:id", updateCoupon);
router.delete("/delete/:id", deleteCoupon);
module.exports = router;
