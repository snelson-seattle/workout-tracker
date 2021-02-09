const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: true     
    },
    exercises: [
        {
            type: {type: Schema.Types.String, required: true},
            name: {type: Schema.Types.String, required: true},
            duration: {type: Schema.Types.String, required: true},
            distance: {type: Schema.Types.Number},
            weight: {type: Schema.Types.Number},
            reps: {type: Schema.Types.Number},
            sets: {type: Schema.Types.Number}
        }
    ]
});

module.exports = mongoose.model("Workout", workoutSchema);