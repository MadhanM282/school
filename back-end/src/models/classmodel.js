const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
    {
        
        Grade: { type: String, required: true},
        Section:{ type: String, required: true},
        subject: { type: String, required: true}
    },
    {
        versionKey: false,
        timestamps:false,
    }
);


module.exports = mongoose.model("ClassData", ClassSchema);