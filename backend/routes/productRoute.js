import express from "express"
import { getAllProducts , createProduct} from "../controller/productController.js";

const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(getAllProducts);


export default router;