const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(morgan('dev'));
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI || 'mongodb://127.0.0.1:27017/luminder';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const chatsRouter = require('./routes/chats');
app.use('/chats', chatsRouter);

const cardsRouter = require('./routes/cards');
app.use('/cards', cardsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});