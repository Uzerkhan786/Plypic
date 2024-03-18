import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['PENDING', 'REJECTED', 'APPROVED'],
        require: true,
        default: 'PENDING'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    admin_id: {
        type: String,
    },
    present: {
        type: Object,
        require: true
    },
    update: {
        type: Object,
        require: true
    }
})
export const review = mongoose.model('Review', reviewSchema);