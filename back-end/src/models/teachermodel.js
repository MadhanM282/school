const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
    {
        
        TeacherName: { type: String, required: true},
        ClassID:[{type:mongoose.Schema.Types.ObjectId,ref:"ClassData"}]
    },
    {
        versionKey: false,
        timestamps:false,
    }
);


module.exports = mongoose.model("TeacherData", TeacherSchema);