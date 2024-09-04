const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken, getUserIdFromToken } = require("../config/jwtProvider");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("user already exist with email: ", email);
    }

    password = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByID = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("addresses");
    if (!user) {
      throw new Error("user not found with id : ", user);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with email : ", email);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = getUserIdFromToken(token);

    const user = await getUserByID(userId);

    if (!user) {
      throw new Error("User not found with id : ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUser = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getUserByID,
  getUserByEmail,
  getUserProfileByToken,
  getAllUser,
};
