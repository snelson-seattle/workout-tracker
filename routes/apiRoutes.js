const express = require("express");

const workoutController = require("../controllers/workoutController");

const router = express.Router();

router.get("/api/workouts", workoutController.getLastWorkout);

router.get("/api/workouts/range", workoutController.getAllWorkouts);

router.post("/api/workouts", workoutController.postAddWorkout);

router.put("/api/workouts/:workoutID", workoutController.putAddExercise);



module.exports = router;