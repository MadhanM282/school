const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema(
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


AdminSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();

    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
});

AdminSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model("AdminData", AdminSchema);