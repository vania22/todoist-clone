const List = require('../models/list');

exports.createList = async (req, res) => {
    try {
        const list = new List(req.body);
        list.userId = req.user._id;

        await list.save();

        res.json(list);
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.updateList = async (req, res) => {
    try {
        const list = await List.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            req.body,
            {
                new: true,
            },
        );

        await list.save();

        res.json(list);
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.deleteList = async (req, res) => {
    try {
        const list = await List.findOneAndRemove({
            _id: req.params.id,
            userId: req.user._id,
        });

        if (!list) {
            res.status(400);
        }

        res.json(list);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getList = async (req, res) => {
    try {
        const list = await List.findOne({
            _id: req.params.id,
            userId: req.user._id,
        });

        await list.populate('tasks').execPopulate();

        if (!list) {
            res.status(400).json({ error: 'Unable to get the list' });
        }

        res.json({ list: list, tasks: list.tasks });
    } catch (error) {
        res.status(400).json({ error: 'Unable to get the list' });
    }
};

exports.getLists = async (req, res) => {
    try {
        const lists = await List.find({ userId: req.user._id });

        if (lists.length === 0) {
            res.status(400).json({ error: 'Unable to get the lists' });
        }

        res.json(lists);
    } catch (error) {
        res.status(400).json({ error: 'Unable to get the lists' });
    }
};
