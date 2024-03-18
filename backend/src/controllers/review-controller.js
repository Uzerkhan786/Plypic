
import { product } from "../models/product.js";
import { review } from "../models/review-model.js";

export const getAllReviewController = async (req, res) => {
    try {
        const Review = await review.find();
        res.json({
            status: true,
            message: 'Get all the review',
            data: Review
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to get all the review',
            data: ''
        })
    }
}

export const getOneUserReviewController = async (req, res) => {
    try {
        const Review = await review.find(req.query);
        res.json({
            status: true,
            message: 'Get all the review of user',
            data: Review
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to get all the review',
            data: ''
        })
    }
}

export const updateReviewController = async (req, res) => {
    try {
        const findOneReview = await review.findOne({ _id: req.params.id });

        if (findOneReview.status === 'PENDING') {
            if (req.body.status === 'APPROVED') {
                const Product = await product.findByIdAndUpdate({ _id: findOneReview.update.id }, {
                    productName: findOneReview.update.productName,
                    department: findOneReview.update.department,
                    price: findOneReview.update.price,
                    productDescription: findOneReview.update.productDescription,

                }, {
                    new: true
                })
                await Product.save();

                const Review = await review.findByIdAndUpdate({ _id: req.params.id }, {
                    status: req.body.status,
                    admin_id: req.body.admin_id
                }, {
                    new: true
                })
                console.log(Review);

                res.json({
                    status: true,
                    message: 'updated the Product',
                    data: Product
                })
            }
            if (req.body.status === 'REJECTED') {


                const Review = await review.findByIdAndUpdate({ _id: req.params.id }, {
                    status: req.body.status,
                    admin_id: req.body.admin_id
                }, {
                    new: true
                })
                console.log(Review);

                res.json({
                    status: true,
                    message: 'updated the Product',
                    data: Product
                })
            }
        }

        else {
            return res.json({
                message: 'It is rejected or approved but not in pending'
            })
        }



    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to update all the review',
            data: ''
        })
    }
}

export const getUserReviewController = async (req, res) => {
    try {
        const Review = await review.findById({ _id: req.params.id });
        res.json({
            status: true,
            message: 'Get all the review of user a particular user',
            data: Review
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to get all the review',
            data: ''
        })
    }
}

