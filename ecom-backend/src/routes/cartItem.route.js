const express = require("express");
const router = express.Router();

const cartItemController = require("../controllers/cartItem.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/:id", authenticate, cartItemController.updateCardItem);
router.delete("/:id", authenticate, cartItemController.removeCardItem);

module.exports = router;