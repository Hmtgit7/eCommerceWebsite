const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, orderController.createOrder);
router.get("/user", authenticate, orderController.orderHistory);
router.get("/:id", authenticate, orderController.findOrderById);

module.exports = router;