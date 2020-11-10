const express = require('express');
const db = require('./db');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const userRoutes = require('./routes/user');
const listRoutes = require('./routes/list');
const taskRoutes = require('./routes/task');

const app = express();

app.use(morgan('combined'));
app.use(bodyparser.json());

app.use(userRoutes);
app.use(listRoutes);
app.use(taskRoutes);

app.listen(3001, () => {
    console.log('Server has started');
});
