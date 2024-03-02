import Product from "../models/productModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ApiFeatures from "../utils/apiFeatures.js";

/*-----Creating A Product------*/

export const createProduct = catchAsyncErrors(async (req, res, next) => {
  // res.send("my name is lallallall")

  req.body.user=await req.user.id; 

  const product = await Product.create(req.body);
  console.log(req.body);

  res.status(201).json({
    sucess: true,
    product,
  });
});

//Get all Products

export const getAllProducts = catchAsyncErrors(async (req, res) => {

  const resultPerPage=10;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const products = await apiFeature.query;

  res.status(200).json({
    sucess: true,
    products,
    productCount,
  });

  // res.status(200).json({message:"route is working properly"})
});

//Get Product Details

export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    sucess: true,
    product,
  });
});

// Update Product ----Admin

export const updateProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runvalidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    sucess: true,
    product,
  });
});

//DELETE A PRODUCT

export const deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});
