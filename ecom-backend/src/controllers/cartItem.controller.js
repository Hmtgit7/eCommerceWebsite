const cartItemService = require('../services/cartItem.service.js');

const updateCardItem = async (req, res) => {
    const user = req.user;
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body);

        return res.status(200).send(updatedCartItem);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const removeCardItem = async (req, res) => {
    const user = req.user;
    try {
        const removeCartItem = await cartItemService.removeCartItem(user._id, req.params.id);

        return res.status(200).send({ message: 'Cart Item removed successfully' });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}


module.exports = {
    updateCardItem,
    removeCardItem,
};