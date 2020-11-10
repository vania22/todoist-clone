const Task = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        task.listId = req.params.listId;
        task.userId = req.user._id;

        await task.save();

        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            {
                new: true,
            },
        );

        if (!task) {
            res.status(400).json({ error: 'Cannot update the task' });
        }

        await task.save();

        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByOneAndRemove({
            _id: req.params.id,
            userId: req.user._id,
        });

        if (!task) {
            res.status(400).json({ error: 'Cannot delete the task' });
        }

        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user._id,
        });

        if (!task) {
            res.status(400).json({ error: 'Unable to get the task' });
        }

        res.json(task);
    } catch (error) {
        res.status(400).json({ error: 'Unable to get the task' });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user._id });

        if (tasks.length === 0) {
            res.status(400).json({ error: 'Unable to get the tasks' });
        }

        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: 'Unable to get the tasks' });
    }
};
