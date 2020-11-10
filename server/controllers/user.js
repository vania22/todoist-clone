const User = require('../models/user');
const jwt = require('jsonwebtoken');

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

exports.updateProfile = async (req, res) => {
    try {
        Object.keys(req.body).forEach(
            (update) => (req.user[update] = req.body[update]),
        );

        await req.user.save();
        res.json(req.user);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.logout = async (req, res) => {
    const user = req.user;

    user.tokens = user.tokens.filter(({ token }) => token !== req.token);

    try {
        await user.save();

        res.json({ message: 'Successfully logged out' });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.logoutFromAll = async (req, res) => {
    const user = req.user;

    user.tokens = [];

    try {
        await user.save();

        res.json({ message: 'Successfully logged out from all accounts' });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.isAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const { _id } = jwt.verify(token, 'secret');
        const user = await User.findOne({ _id, 'tokens.token': token });

        if (!user) {
            throw new Error('Not Authorized');
        }

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Not Authorized' });
    }
};
