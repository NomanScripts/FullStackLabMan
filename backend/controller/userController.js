const User = require("../models/userMoadal");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncError");
const { genratejwtToken } = require("../config/jwtTojen");
const { genrateRefreshToken } = require("../config/refreshToken");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utils/sendEmail");
const crypto = require("crypto");
const Product = require("../models/productModal");
const Cart = require("../models/cartModal");
const Coupon = require("../models/couponModal");
const Order = require("../models/orderModal");
const uniqId = require("uniqid");

exports.createUser = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new ErrorHandler("User Already Exist", 409);
  }
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email: email });
  if (findUser && (await findUser.isPasswordMatch(password))) {
    const refreshToken = genrateRefreshToken(findUser.id);
    const updatedUser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser.id,
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      email: findUser.email,
      mobile: findUser.mobile,
      token: genratejwtToken(findUser.id),
    });
  } else {
    throw new ErrorHandler("Invalid Credentials", 401);
  }
});

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const allUsers = await User.find();
  res.json(allUsers);
});

exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (user) {
    res.json({ user });
  } else {
    throw new ErrorHandler("User not found", 404);
  }
});

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) {
    return next(new ErrorHandler("User Not Found", 404));
  }
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  const { _id } = req.user;
  const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  if (!updatedUser) {
    return next(new ErrorHandler("User Not Found", 404));
  }

  res.json(updatedUser);
});

exports.saveUserAddress = catchAsyncErrors(async (req, res, next) => {
  const { _id } = req.user;
  const updateUser = await User.findByIdAndUpdate(
    _id,
    {
      address: req?.body?.address,
    },
    {
      new: true,
    }
  );
  if (!updateUser) {
    throw new ErrorHandler("Adress not saved", 403);
  }
  res.json(updateUser);
});

exports.blockUser = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const findUser = await User.findByIdAndUpdate(
    id,
    {
      isBlocked: true,
    },
    {
      new: true,
    }
  );
  if (!findUser) {
    throw new ErrorHandler("User not found", 404);
  }
  res.json({
    success: true,
    message: "User Blocked!!",
  });
});

exports.unBlockUser = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { isBlocked: false },
    { new: true, runValidators: true }
  );

  if (!updatedUser) {
    return next(new ErrorHandler("User not found", 404));
  }

  res.json({
    success: true,
    message: "User unBlocked!!",
  });
});

exports.handleRefreshToken = catchAsyncErrors(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error(" No Refresh token present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = genratejwtToken(user?._id);
    res.json({ accessToken });
  });
});

exports.logoutUser = catchAsyncErrors(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.sendStatus(204);
  }
  await User.findOneAndUpdate(
    { refreshToken },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204);
});

exports.updatePassword = catchAsyncErrors(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    if (!updatedPassword) {
      throw new ErrorHandler("Password updation failed!!", 403);
    }
    res.json({
      message: "Password updated successfully!!",
    });
  } else {
    res.json({
      message: "Password not found in body!!",
    });
  }
});

exports.forgotPassword = catchAsyncErrors(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ErrorHandler("User Not found with this email!!", 404);
  }
  const resetToken = await user.createPasswordResetToken();
  await user.save();
  const resetUrl = `Hi, Please follow this link to reset your Password. This link is valid till 10 minutes from now.
   <a href="http://localhost:5000/api/user/reset-password/${resetToken}">Link</a>`;
  const data = {
    to: email,
    text: `Hey ${req.user.firstname + req.user.lastname}`,
    subject: "Forgot Password Link",
    html: resetUrl,
  };
  sendEmail(data);
  res.json({
    message: "A password reset email has been sent. Please check your email!",
  });
});

exports.resetPasswod = catchAsyncErrors(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  if (!password) {
    res.json({
      message: "New password is missing in body!",
    });
  }
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new ErrorHandler("Token Expired, Please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json({
    message: "Password reset successfully!!",
  });
});

exports.loginAdmin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  const findAdmin = await User.findOne({ email: email });
  if (findAdmin && findAdmin.role !== "Admin")
    throw new ErrorHandler("Not authorized", 401);
  if (findAdmin && (await findAdmin.isPasswordMatch(password))) {
    const refreshToken = genrateRefreshToken(findAdmin.id);
    const updatedUser = await User.findByIdAndUpdate(
      findAdmin.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin.id,
      firstname: findAdmin.firstname,
      lastname: findAdmin.lastname,
      email: findAdmin.email,
      mobile: findAdmin.mobile,
      token: genratejwtToken(findAdmin.id),
    });
  } else {
    throw new ErrorHandler("Invalid Credentials", 401);
  }
});

exports.addToWishlist = catchAsyncErrors(async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;
  const user = await User.findById(_id);
  const alreadyAdded = user.wishlist.find((id) => id.toString() === productId);
  if (alreadyAdded) {
    let user = await User.findByIdAndUpdate(
      _id,
      {
        $pull: { wishlist: productId },
      },
      {
        new: true,
      }
    );

    res.json({
      message: "Product remove from wishlist!",
    });
  } else {
    let user = await User.findByIdAndUpdate(
      _id,
      {
        $push: { wishlist: productId },
      },
      {
        new: true,
      }
    );
    res.json({
      message: "Product successfully added to wishlist!",
    });
  }
});

exports.getWislhlist = catchAsyncErrors(async (req, res) => {
  const { _id } = req.user;
  const findUser = await User.findById(_id).populate("wishlist");
  if (!findUser) {
    throw new ErrorHandler("No user exist against this id.");
  }
  res.json(findUser);
});

//add to cart functionality
exports.userCart = catchAsyncErrors(async (req, res) => {
  let products = [];
  const { cart } = req.body;
  const { _id } = req.user;
  const user = await User.findById(_id);
  const alreadyExistCart = await Cart.findOne({ orderBy: user._id });
  if (alreadyExistCart) {
    alreadyExistCart.remove();
  }
  for (let i = 0; i < cart.length; i++) {
    let object = {};
    object.product = cart[i]._id;
    object.count = cart[i].count;
    object.color = cart[i].color;
    let getPrice = await Product.findById(cart[i]._id).select("price").exec();
    object.price = getPrice.price;
    products.push(object);
  }
  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }
  let newCart = await new Cart({
    products,
    cartTotal,
    orderBy: user?._id,
  }).save();
  res.json(newCart);
});

exports.getUserCart = catchAsyncErrors(async (req, res) => {
  const { _id } = req.user;
  const cart = await Cart.findOne({ orderBy: _id });
  if (!cart) {
    throw new ErrorHandler("No cart items against this user found!!", 404);
  } else res.json(cart);
  if (!cart) {
  }
});

exports.emptyCart = catchAsyncErrors(async (req, res) => {
  const { _id } = req.user;
  const user = await User.findOne({ _id });
  const cart = await Cart.findOneAndRemove({ orderBy: user._id });
  if (!cart) {
    throw new ErrorHandler("No cart items against this user found!!", 404);
  } else res.json(cart);
});

exports.applyCoupon = catchAsyncErrors(async (req, res) => {
  const { _id } = req.user;
  const { coupon } = req.body;

  const validCoupon = await Coupon.findOne({ name: coupon });
  if (!validCoupon) {
    throw new ErrorHandler("Invalid Coupon!", 403);
  }

  const user = await User.findOne({ _id });
  const cart = await Cart.findOne({
    orderBy: user._id,
  }).populate("products.product");

  if (!cart) {
    throw new ErrorHandler("Cart not found!", 404);
  }

  let { products, cartTotal } = cart;

  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);

  await Cart.findOneAndUpdate(
    { orderBy: user._id },
    { totalAfterDiscount },
    { new: true }
  );

  res.json({ totalAfterDiscount });
});

exports.createOrder = catchAsyncErrors(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;
  if (!COD) throw new Error("Create cash order failed", 403);
  const user = await User.findById(_id);
  let userCart = await Cart.findOne({ orderBy: user._id });
  let finalAmount = 0;
  if (couponApplied && userCart.totalAfterDiscount) {
    finalAmount = userCart.totalAfterDiscount;
  } else {
    finalAmount = userCart.cartTotal;
  }

  let newOrder = await new Order({
    products: userCart.products,
    paymentIntent: {
      id: uniqId(),
      method: "COD",
      amount: finalAmount,
      status: "Cash On Delivery",
      created: Date.now(),
      currency: "usd",
    },
    orderBy: user._id,
    orderStatus: "Cash On Delivery",
  }).save();

  let update = userCart.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id },
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });
  const updated = await Product.bulkWrite(update, {});
  res.json({
    message: "Order placed successfully!",
  });
});

exports.getOrders = catchAsyncErrors(async (req, res) => {
  const { _id } = req.user;
  const userOrders = await Order.findOne({ orderBy: _id })
    .populate("products.product")
    .exec();
  if (!userOrders)
    throw new ErrorHandler("No orders exist against this id", 404);
  res.json(userOrders);
});

exports.updateOrderStatus = catchAsyncErrors(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const updateOrderStatus = await Order.findByIdAndUpdate(
    id,
    {
      orderStatus: status,
      paymentIntent: {
        status: status,
      },
    },
    { new: true }
  )
    .populate("products.product")
    .exec();

  res.json(updateOrderStatus);
});
