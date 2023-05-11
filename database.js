const mongoose = require('mongoose');
const config = require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI);
mongoose.connection.once('open', _ => {
    console.log('Database connected to ' + MONGODB_URI);
});
mongoose.connection.on('error', err => {
    console.log(err);
});
