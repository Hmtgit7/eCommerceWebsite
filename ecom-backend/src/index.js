const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
