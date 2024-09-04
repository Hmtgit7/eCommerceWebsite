const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// ROUTING FOR AUTHENTICATION

// AUTH
const authRoutes = require("./routes/auth.route.js");
app.use("/auth", authRoutes);

// USER
const userRoutes = require("./routes/user.route.js");
app.use("/api/users", userRoutes);

// PRODUCT
const productRoutes = require("./routes/product.route.js");
app.use("/api/products", productRoutes);

// ADMIN
const adminProductRoutes = require("./routes/adminProduct.route.js");
app.use("/api/admin/product", adminProductRoutes);

// CART
const cartRoutes = require("./routes/cart.route.js");
app.usr("/api/cart", cartRoutes);

// CART ITEM
const cartItemRoutes = require("./routes/cartItem.route.js");
app.use("/api/cart_items", cartItemRoutes);

// ORDER
const orderRoutes = require("./routes/order.route.js");
app.use("/api/orders", orderRoutes);

// ADMIN ORDER
const adminOrderRoutes = require("./routes/adminOrder.route.js");
app.use("/api/admin/orders", adminOrderRoutes);

// REVIEW
const reviewRoutes = require("./routes/review.route.js");
app.use("/api/reviews", reviewRoutes);

// RATING
const ratingRoutes = require("./routes/rating.route.js");
app.use("/api/ratings", ratingRoutes);

module.exports = app;