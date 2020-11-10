const express = require('express');
const db = require('./db');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyparser.json());

app.listen(3001, () => {
    console.log('Server has started');
});
