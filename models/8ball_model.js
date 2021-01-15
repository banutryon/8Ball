const mongoose = require('mongoose');

const eightBallSchema = new mongoose.Schema({
    name: String,
    url: String
});

const EightBall = mongoose.model("EightBall", eightBallSchema);


module.exports = EightBall;

