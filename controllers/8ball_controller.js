const express = require('express');
const eightBall = express.Router();

// ROUTES
eightBall.get('/', (req, res) => {
    res.send("Hello world")
});

module.exports = eightBall;