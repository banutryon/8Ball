const express = require("express");
const eightBall = express.Router();
const EightBall = require("../models/8ball_model.js");
const SeedData = require("../models/seed_model.js");

// ROUTES
eightBall.get("/", (req, res) => {
    EightBall.find({}, (err, foundAnswers) => {
        res.json(foundAnswers);
    });
});

eightBall.get("/seed", (req, res) => {
    EightBall.insertMany(SeedData, () => {
        res.redirect("/eightball");        
    });
});

eightBall.get("/dropcollection", (req, res) => {
    EightBall.collection.drop();
    res.redirect("/eightball");
});

eightBall.get("/reset", (req, res) => {
    EightBall.collection.drop();
    EightBall.insertMany(SeedData, () => {
        res.redirect("/eightball");        
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