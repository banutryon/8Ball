// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// ROUTES
app.get('/', (req, res) => {
    res.send("Hello world")
});

// LISTENER
app.listen(PORT, () => {
    console.log("listening on port: ", PORT);
});