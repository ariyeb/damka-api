const express = require('express');
const cors = require('cors');

require('./db/mongoose');
const userRouter = require('./routers/user');

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);

module.exports = app;