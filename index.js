const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true 
}, () => console.log("Connected to MongoDB"));

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(8800, () => console.log("Backend server is running"));

