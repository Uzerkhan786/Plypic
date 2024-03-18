import { product } from "../models/product.js";
import { review } from "../models/review-model.js";
import { user } from "../models/user-model.js";


export const postProductsControllers = async (req, res) => {
    try {
        const Product = await product.create({
            productName: req.body.productName,
            price: req.body.price,
            department: req.body.department,
            productDescription: req.body.productDescription,
            image: req.body.image
        });
        await Product.save();
        console.log(Product);
        res.json({
            status: true,
            message: 'Successfully post all the products',
            data: Product,
            error: ''
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to post all the products',
            data: {},
            error: error
        })
    }
}

export const getAllProductsControllers = async (req, res) => {
    try {
        const Product = await product.find();
        res.json({
            status: true,
            message: 'Successfully get all the products',
            data: Product,
            error: ''
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to get all the products',
            data: {},
            error: error
        })
    }
}

export const getProductControllers = async (req, res) => {
    try {
        const Product = await product.findById({ _id: req.params.id });
        res.json({
            status: true,
            message: 'Successfully get  the product',
            data: Product,
            error: ''
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to the product',
            data: {},
            error: error
        })
    }
}

export const getUpdateProductControllers = async (req, res) => {
    try {
        // const findId = await product.findById({ _id: req.params.id });

        const User = await user.findOne({ email: req.body.email });
        console.log(User);
        const Product = await product.findById({ _id: req.params.id })
        if (User.role === 'TEAM_MEMBER') {

            const productReview = await review.create({

                author: User._id,
                present: {
                    productName: Product.productName,
                    productDescription: Product.productDescription,
                    department: Product.department,
                    price: Product.price,
                    image: Product.image
                },
                update: {
                    productName: req.body.productName,
                    productDescription: req.body.productDescription,
                    department: req.body.department,
                    image: req.body.image,
                    price: req.body.price,
                    id: req.params.id
                }
            })
            return res.json({
                data: productReview,
                message: 'posted for review'
            })

        }
        else {
            const Product = await product.findByIdAndUpdate({
                _id: req.params.id
            },
                {
                    productName: req.body.productName,
                    productDescription: req.body.productDescription,
                    department: req.body.department,
                    image: req.file.filename,
                    price: req.body.price
                }
                , {
                    new: true
                });

            await Product.save();
            console.log(Product);
            res.json({
                status: true,
                message: 'Successfully updated the product',
                data: Product,
                error: ''
            })
        }

    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to update the product',
            data: {},
            error: error
        })
    }
}

export const getDeleteProductControllers = async (req, res) => {
    try {
        const Product = await product.find(req.params.id);
        res.json({
            status: true,
            message: 'Successfully deleted the the product',
            data: Product,
            error: ''
        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to delete the product',
            data: {},
            error: error
        })
    }
}

