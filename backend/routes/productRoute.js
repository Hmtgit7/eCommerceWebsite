import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} from "../controller/productController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/products").get(isAuthenticatedUser,authorizeRoles("admin"),getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
  .delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
  .get(getProductDetails);

export default router;   