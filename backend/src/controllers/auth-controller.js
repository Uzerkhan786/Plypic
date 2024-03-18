import { user } from "../models/user-model.js";
export const registerController = async (req, res) => {
    try {
        const a = req.body.role.toUpperCase();
        const User = await user.create({
            email: req.body.email,
            password: req.body.password,
            role: a
        });
        await User.save();
        res.json({
            status: true,
            message: 'Successfully register the user',
            data: User

        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to register the user',
            data: {}

        })
    }
}

export const loginController = async (req, res) => {
    try {

        const userFind = await user.findOne({ email: req.body.email });
        console.log(userFind);
        if (userFind === null) {
            throw new { error: 'User does not exist, Please register' }
        }

        if (userFind.password !== req.body.password) {
            throw new error;
        }

        res.json({
            status: true,
            message: 'Successfully login the user',
            data: userFind

        })
    } catch (error) {
        res.json({
            status: false,
            message: 'Unable to login the user',
            data: {},
            error: error
        })
    }
}