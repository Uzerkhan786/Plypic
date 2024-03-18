import mongoose, { Mongoose } from "mongoose";
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    productDescription: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    }
})
export const product = mongoose.model('Product', productSchema);