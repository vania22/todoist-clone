const router = require('express').Router();

const {
    signUp,
    signIn,
    isAuth,
    logout,
    logoutFromAll,
} = require('../controllers/user');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/logout', isAuth, logout);
router.get('/logoutAll', isAuth, logoutFromAll);

module.exports = router;
