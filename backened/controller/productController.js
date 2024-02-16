import Product from "../models/productModel.js"


export const createProduct=async (req,res,next)=>{

    const product=await Product.create(req.body);
    console.log(req.body)

    res.status(201).json({
        sucess:true,
        product
    })

}

export const getAllProducts=(req,res)=>{

    res.status(200).json({message:"route is working properly"})
}