const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: true     
    },    
    exercises: [
        {
            type: {type: Schema.Types.String, required: true},
            name: {type: Schema.Types.String, required: true},
            duration: {type: Schema.Types.Number, required: true},
            distance: {type: Schema.Types.Number},
            weight: {type: Schema.Types.Number},
            reps: {type: Schema.Types.Number},
            sets: {type: Schema.Types.Number}            
        }        
    ]       
}, {
    toObject: {
        virtuals: true
    },

    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function() {
    let total = 0;
    this.exercises.forEach(exercise => {
        total += exercise.duration;
    });

    return total;
});

module.exports = mongoose.model("Workout", workoutSchema);