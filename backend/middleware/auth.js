import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);

  if (!token) {
    return next(new ErrorHandler(" Login first to access this resource.", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decodedData._id);

  next();
});

export const authorizeRoles=(...roles)=>{

  return(req,res,next)=>{
    if(!roles.includes(req.user.role)){
      return next(
        new ErrorHandler(`Role : (${req.user.role}) is not allowed to access this resource`,403)
      );
    }

    next();
  };

}