
const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://madhan:mohan@cluster0.rdpkh.mongodb.net/school?retryWrites=true&w=majority"
    );
};