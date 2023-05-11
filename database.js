const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://liccealaboral:challenge2023@cluster0.xled8cl.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI);
mongoose.connection.once('open', _ => {
    console.log('Database connected to ' + MONGODB_URI);
});
mongoose.connection.on('error', err => {
    console.log(err);
});