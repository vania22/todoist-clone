const router = require('express').Router();

const { isAuth } = require('../controllers/user');

const {
    createTask,
    updateTask,
    deleteTask,
    getTask,
    getTasks,
} = require('../controllers/task');

router.post('/task/:listId', isAuth, createTask);
router.patch('/task/:id', isAuth, updateTask);
router.delete('/task/:id', isAuth, deleteTask);
router.get('/task/:id', isAuth, getTask);
router.get('/tasks', isAuth, getTasks);

module.exports = router;
