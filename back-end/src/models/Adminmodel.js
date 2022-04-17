const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        
        adminname: { type: String, required: true},
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps:false,
    }
);

module.exports = mongoose.model("userData", userSchema);