const userService = require("./user.service");
const CartItem = require("../models/cartItem.model");

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("Cart Item not Found : ", cartItemId);
    }
    const user = await userService.getUserByID(item.userId);
    if (!user) {
      throw new Error("User not Found : ", userId);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;
      const updatedCartItem = await item.save();

      return updatedCartItem;
    } else {
      throw new Error("You can't update this cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(userId);
  if (user._id.toString() === cartItem.toString()) {
    await CartItem.findByIdAndDelete(cartItemId);
  }
  throw new Error("you cant remove another user's item");
}

async function findCartItemById(cartItemId) {
  const cartItem = await findCartItemById(cartItemId);

  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("cartitem not found with id : ", cartItemId);
  }
}

module.exports = {
  updateCartItem,
  findCartItemById,
  removeCartItem,
};
