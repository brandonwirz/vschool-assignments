const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //parses from json to js
// const uuid = require("uuid/v4");
const mongoose =require("mongoose");
const morgan = require("morgan");
const port = process.env.PORT || 7000;


app.use(bodyParser.json());//excepts json and how to parse
app.use(morgan("dev"));

app.use ("/pets", require("./routes/petRoutes"));
//only use pet routes if starts with pets
//localhost:7000/Pets

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/pet-adoption",
    {useMongoCLient: true},
    (err) => {
      if (err) throw err;
      console.log("Connected to the database");
    }
);

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}!`)
})
