const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
     console.log(req.music);
     res.send("Your get was successful!");
});

module.exports= routes;
