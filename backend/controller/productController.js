import Product from "../models/productModel.js";


/*-----Creating A Product------*/

export const createProduct = async (req, res, next) => {
  // res.send("my name is lallallall")
  const product = await Product.create(req.body);
  console.log(req.body);

  res.status(201).json({
    sucess: true,
    product,
  });
};

//Get all Products

export const getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    sucess: true,
    products,
  });

  // res.status(200).json({message:"route is working properly"})
};


//Get Product Details

export const getProductDetails=async(req,res)=>{
  const product= await Product.findById(req.params.id);

  if(!product){
    return res.status(404).json({
      sucess:false,
      message:"Product not found"
    })
  }

  res.status(200).json({
    sucess:true,
    product
  })
}


// Update Product ----Admin

export const updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      sucess: false,
      message: "Product not found",
    });
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
};



//DELETE A PRODUCT

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      sucess:false,
      message:"Product not found"
    });
  }


  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
};