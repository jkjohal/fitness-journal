const { Schema, model }  = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    exercises: [{
        type: Schema.Types.ObjectId,
       ref: "exercise"
    }],

});

const User = model("User", userSchema);

module.exports = User