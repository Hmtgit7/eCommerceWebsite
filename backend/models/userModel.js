import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Your Name Cannot Exceed 30 Characters"],
    minLength: [4, "Your Name Must Be At Least 4 Characters Long"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validator: [validator.isEmail, "Please Enter a Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password Should be greater than 8 Characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role:{
    type:String,
    default:'user',
  },
  resetPasswordToken: String,
  resetPasswordExpire:Date,
});

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//JWT TOKEN

userSchema.methods.getJwtToken =function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
    expiresIn: process.env.JWT_EXPIRES_TIME,
  })
}

//COMPARE USER PASSWORD

userSchema.methods.comparePassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
}

//GENERATE PASSWORD RESET TOKEN 

userSchema.methods.getResetPasswordToken=function(){
  //Generate Token
  const resetToken=crypto.randomBytes(20).toString("hex"); 

  //Hash and set to resetPasswordToken
  this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire=Date.now()+15*60*1000;

  return resetToken;
}

const User=mongoose.model("User", userSchema);
export default User;  