const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const uuid = require("uuid/v4");
const port = 3000;

const bounties = [
    {
      firstName: "Darth",
      lastName: "Vader",
      living: false,
      bountyAmt: 5300,
      type: "Sith",
      id: uuid()
    },
    {
     firstName: "Luke",
     lastName: "Skywalker",
     living: true,
     bountyAmt: 8300,
     type: "Jedi",
     id: uuid()
    },
    {
     firstName: "Han",
     lastName:  "Solo",
     living: true,
     bounty:  7000,
     type: "Jedi",
     id: uuid()
    }
];



//GET
app.get("/bounties", (req, res) => {
        res.send(bounties)
})
//POST
app.post("/bounties", (req, res) => {
        req.body._id = uuid();
        bounties.push(req.body);
        res.send(req.body);
})

//DELETE
app.delete("/bounties/:id", (req, res)=>{
    bounties = bounties.filter(bounties)=>{
        return bounties._id 
    }

    // res.send({msg: "Item removed "})

//req.params

})
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}!`)
})
