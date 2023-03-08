const { Schema, model }  = require("mongoose");

const exerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    exerciseType: {
        type: String,
        required: false
    },

});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise