const mongoose = require('mongoose');
const Task = require('./task');

const listSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
        default: '#fff',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
});

listSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'listId',
});

listSchema.pre('remove', async function (next) {
    const list = this;
    await Task.deleteMany({ listId: list._id });

    next();
});

const List = mongoose.model('List', listSchema);

module.exports = List;
