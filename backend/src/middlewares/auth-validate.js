export const authValidate = async (req, res, next) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw new { error: 'Please fill the email and password' }
        }
        const findEmail = await User.findOne({ email: req.body.email });
        if (findEmail) {
            return res.json({
                status: true,
                data: 'User already exist'

            })
        }
        next()
    } catch (error) {
        res.json({
            data: {},
            error: error,
            status: false
        })
    }
}