const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/school_database');
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connect;