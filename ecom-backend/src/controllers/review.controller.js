const reviewService = require("../services/review.service.js");

const createReview = async (req, res) => {
    const user = req.user;
    try {
        const review = await reviewService.createReview(req.body, user);
        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const getAllReviews = async (req, res) => {
    const productId = req.params.productId;
    try {
        const reviews = await reviewService.getAllReview(productId);
        return res.status(200).send(reviews);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createReview,
    getAllReviews
}