const router = require('express').Router();

const {
    signUp,
    signIn,
    isAuth,
    logout,
    logoutFromAll,
    updateProfile,
} = require('../controllers/user');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.patch('/user/me', isAuth, updateProfile);
router.get('/logout', isAuth, logout);
router.get('/logoutAll', isAuth, logoutFromAll);

module.exports = router;
