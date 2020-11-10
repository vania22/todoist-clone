const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: true,
        },
        listId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'List',
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    { timestamps: true },
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
