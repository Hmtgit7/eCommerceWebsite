import crypto from "crypto";

import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";

import User from "../models/userModel.js";
import sendToken from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js";

//REGISTER USER

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "public_id",
      url: "url",
    },
  });

  sendToken(user, 201, res);
});

//LOGIN USER

export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //CHECK IF EMAIL AND PASSWORD IS ENTERED BY USER

  if (!email || !password) {
    return nexr(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email: email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 200, res);
});

//LOGOUT USER

export const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

//FORGOT PASSWORD

export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User Not Found with this Email", 404));
  }

  //Get Reset Password Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message =
    "Your password reset token is as follow:\n\n" +
    resetPasswordUrl +
    "\n\nIf you have not requested this email, then ignore it.";

  try {
    await sendEmail({
      email: user.email,
      subject: "ShopIT Password Recovery",
      message,
    });

    res.status(200).json({
      sucess: true,
      message: `Email sent to ${user.email} sucessfully.`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});


// RESET PASSWORD 

export const resetPassword = catchAsyncErrors(async (req,res,next)=>{
  //Hash URL token
  const resetPasswordToken=crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user=await User.findOne({ resetPasswordToken, resetPasswordExpire: { $gt: Date.now() } });

  if(!user){
    return next(new ErrorHandler('Password reset token is invalid or has been expired',400));
  }
  
  if(req.body.password !== req.body.confirmPassword){
    return next(new ErrorHandler('Password does not match',400));
  }

  //Setup new password
  user.password=req.body.password;

  user.resetPasswordToken=undefined;
  user.resetPasswordExpire=undefined;

  await user.save();

  sendToken(user,200,res);
})