const express = require("express");
const router = express.Router();

const adminOrderController = require("../controllers/adminOrder.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, adminOrderController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, adminOrderController.confirmOrders);
router.put("/:orderId/ship", authenticate, adminOrderController.shipOrders);
router.put("/:orderId/deliver", authenticate, adminOrderController.deliverOrders);
router.put("/:orderId/cancel", authenticate, adminOrderController.cancelOrders);
router.put("/:orderId/delete", authenticate, adminOrderController.deleteOrders);

module.exports = router;