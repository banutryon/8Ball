// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

// CONFIGURATION
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));

const eightBallController = require("./controllers/8ball_controller.js");
app.use("/eightball", eightBallController);


const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", err =>
    console.log(err.message," is Mongod not running?/Problem with Atlas Connection?")
);
db.on("connected", () => {
    console.log("mongo connected: ", MONGODB_URI);
});
db.on("disconnected", () => {
    console.log("mongo disconnected");
});

// LISTENER
app.listen(PORT, () => {
    console.log("listening on port: ", PORT);
});