import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'TEAM_MEMBER'],
        require: true
    }
})
export const user = mongoose.model('User', userSchema);