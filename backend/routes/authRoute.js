const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logoutUser,
  updatePassword,
  forgotPassword,
  resetPasswod,
  loginAdmin,
  addToWishlist,
  getWislhlist,
  saveUserAddress,
  userCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", authMiddleware, isAdmin, getAllUsers);
router.get("/getUser/:id", authMiddleware, isAdmin, getSingleUser);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteUser);
router.put("/update", authMiddleware, updateUser);
router.put("/blockUser/:id", authMiddleware, isAdmin, blockUser);
router.put("/unBlockUser/:id", authMiddleware, isAdmin, unBlockUser);
router.get("/refreshToken", handleRefreshToken);
router.get("/logout", logoutUser, authMiddleware);
router.put("/password", authMiddleware, updatePassword);
router.post("/forget-password", authMiddleware, forgotPassword);
router.put("/reset-password/:token", resetPasswod);
router.post("/loginAdmin", loginAdmin);
router.put("/wishlist", authMiddleware, addToWishlist);
router.get("/getWishlist", authMiddleware, getWislhlist);
router.put("/save-address", authMiddleware, saveUserAddress);
router.post("/apply", authMiddleware, applyCoupon);
router.post("/cart", authMiddleware, userCart);
router.post("/applyCoupon", authMiddleware, applyCoupon);
router.post("/createOrder", authMiddleware, createOrder);
router.get("/orders", authMiddleware, getOrders);
router.put(
  "/update-order-status/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);
module.exports = router;
