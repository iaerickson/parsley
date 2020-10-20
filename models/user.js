const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;