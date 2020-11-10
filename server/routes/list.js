const router = require('express').Router();

const { isAuth } = require('../controllers/user');
const {
    createList,
    updateList,
    deleteList,
    getList,
    getLists,
} = require('../controllers/list');

router.post('/list', isAuth, createList);
router.patch('/list/:id', isAuth, updateList);
router.delete('/list/:id', isAuth, deleteList);
router.get('/list/:id', isAuth, getList);
router.get('/lists', isAuth, getLists);

module.exports = router;
