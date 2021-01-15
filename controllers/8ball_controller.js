const express = require("express");
const eightBall = express.Router();
const EightBall = require("../models/8ball_model.js");

// ROUTES
eightBall.get("/", (req, res) => {
    EightBall.find({}, (err, foundAnswers) => {
        res.json(foundAnswers);
    });
});

eightBall.post("/", (req, res) => {
    EightBall.create(req.body, (err, createdAnswer) => {
        EightBall.find({}, (err, foundAnswers) => {
            res.json(foundAnswers);
        });
    });
});

eightBall.put("/:id", (req, res) => {
    EightBall.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedAnswer) => {
            if (err) {
                res.send(err);
            } else {
                EightBall.find({}, (err, foundAnswers) => {
                    res.json(foundAnswers);
                });
            }
        });
});

eightBall.delete("/:id", (req, res) => {
    EightBall.findByIdAndRemove(req.params.id, (err, deletedAnswer) => {
        EightBall.find({}, (err, foundAnswers) => {
            res.json(foundAnswers);
        });
    });
});

module.exports = eightBall;