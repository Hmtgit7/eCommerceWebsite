import React from "react";
import "./ProductCard.css";

const ProductCard = ({ Product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className=" h-[20rem]">
        <img
          className="w-full h-full object-cover object-left-top"
          // src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
          src={Product.imageUrl}
          alt="product"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{Product.brand}</p>
          <p>{Product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{Product.discountPrice}</p>
          <p className="line-through opacity-50">{Product.price}</p>
          <p className="text-green-600 font-semibold">{Product.discountPersent}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
