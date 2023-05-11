const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://127.0.0.1:27017/tablaPosiciones'
mongoose.connect(MONGODB_URI);
mongoose.connection.once('open', _ => {
    console.log('Database connected to ' + MONGODB_URI);
});
mongoose.connection.on('error', err => {
    console.log(err);
});