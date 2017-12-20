const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //parses from json to js
const mongoose =require("mongoose");
const morgan = require("morgan");
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/guns", require("./routes/gunRoutes"));


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/gun-Inventory",
    {useMongoCLient: true},
    (err) => {
      if (err) throw err;
      console.log("Connected to the database");
    }
);


app.listen(port, ()=>{
    console.log(`App is listening on port ${port}!`)
})
