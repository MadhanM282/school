const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema(
    {
        
        schoolName: { type: String, required: true},
        TeachersId: [{type:mongoose.Schema.Types.ObjectId,ref:"TeacherData"}],
        adminId:{type:mongoose.Schema.Types.ObjectId,ref:"AdminData"}
    },
    {
        versionKey: false,
        timestamps:false,
    }
);


module.exports = mongoose.model("SchoolData", SchoolSchema);