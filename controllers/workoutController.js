const { Workout } = require("../models");

exports.getLastWorkout = (req, res) => {
    Workout.find({}).sort({_id:-1}).limit(1).then(workout => {
        res.json(workout);
    });
    
}

exports.postAddWorkout = (req, res) => {
    const workout = new Workout({exercises: []});
    workout
        .save()
        .then(workout => {
            console.log("Workout created!");
            res.json(workout);
        })
        .catch(err => {
            console.log(err)
        });
}

exports.putAddExercise = (req, res) => {
    const exercise = {};

    if(req.body.type === "cardio") {
        exercise.type = req.body.type;
        exercise.name = req.body.name;
        exercise.distance = req.body.distance;
        exercise.duration = req.body.duration;
    }else {
        exercise.type = req.body.type;
        exercise.name = req.body.name;
        exercise.weight = req.body.weight;
        exercise.reps = req.body.reps;
        exercise.sets = req.body.sets;
        exercise.duration = req.body.duration;
    }

    const workoutID = req.params.workoutID;
    Workout.findById(workoutID).then(workout => {
        workout.exercises.push(exercise);
        return workout.save();
    }).then(result => {
        console.log("New Exercise added to " + workoutID);
        res.redirect("/exercise");
    }).catch(err => {
        console.log(err);
    });
}

exports.getAllWorkouts = (req, res) => {
    Workout.find({}).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    });
}