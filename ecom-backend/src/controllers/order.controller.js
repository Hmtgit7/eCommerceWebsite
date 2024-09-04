const orderService = require('../services/order.service.js');

const createOrder = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const findOrderById = async (req, res) => {
    const user = req.user;
    try {
        let resultOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(resultOrder);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const orderHistory = async (req, res) => {
    const user = req.user;
    try {
        let orderHistory = await orderService.userOrderHistory(user._id);
        return res.status(201).send(orderHistory);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createOrder,
    findOrderById,
    orderHistory,
};