const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.findOne().sort({created_at: -1}).exec((err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
});

module.exports = router;