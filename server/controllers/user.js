const User = require('../models/user');

exports.signUp = async (req, res) => {
    try {
        const user = new User(req.body);
        const token = await user.generateToken();
        await user.save();

        res.json({
            user,
            token,
        });
    } catch (error) {
        res.status(400).json({ error: 'User with given email already exists' });
    }
};

exports.signIn = async (req, res) => {
    try {
        const user = await User.compareCredentials(
            req.body.email,
            req.body.password,
        );

        const token = await user.generateToken();

        res.json({ user, token });
    } catch (error) {
        res.status(400).json({ error: 'Wrong credentials provided' });
    }
};
