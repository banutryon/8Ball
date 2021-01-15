const express = require("express");
const eightBall = express.Router();
const EightBall = require("../models/8ball_model.js");

// ROUTES
eightBall.get("/", (req, res) => {
    res.send("index");
});

eightBall.post("/", (req, res) => {
    EightBall.create(req.body, (err, createdAnswer) => {
        EightBall.find({}, (err, foundAnswers) => {
            res.json(foundAnswers);
        });
    });
});

module.exports = eightBall;