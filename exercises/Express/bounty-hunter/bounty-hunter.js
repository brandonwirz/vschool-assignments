const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //parses from json to js
app.use(bodyParser.json());//excepts json and how to parse
const uuid = require("uuid/v4");
const port = 3000;
// let id =0;
// const port = process.env.PORT || 8000;

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

app.get("/", (req, res) => {
  // console.log(req)//info about incoming request
  //Get bounties from database
        return res.send(bounties)
});


// app.get("/bounty/:id", (req, res) => {
//         const bounty = bounties.find(item => item.id === req.params.id)
//         console.log(typeOf req.params.id)
//         return res.send()
//
// });
//POST
app.post("/", (req, res) => {
        req.body.id = uuid();//body
        // or id++;
        bounties.push(req.body);
        // res.send(bounties);
        return res.send(req.body);
})

// DELETE
app.delete("/:id", (req, res) => {
    bounties = bounties.filter(item => item.id !== req.parms.id);
        return res.send({msg:"items gone"});
    });
delete("/:id", (req, res)=>{
    bounties = bounties.filter((bounty)=>{
        return bounty._id !==req.params.id
    })

    res.send({
        message: "Item gone"
    })
})

    // res.send({msg: "Item removed "})

//req.params

//for N loop only for objects
app.put("/bounty/:id", (req, res) => {
        const index = bounties.findIndex(item => item.id === req.params.id);
        const foundBounty = bounties[index];
        for (let prop in foundBounty) {
          if(foundBounty.hasOwnProperty(prop)){
              foundBounty[prop] = rect.body[prop] || foundBounty[prop]
        }                          //undefined
    }
    bounties[index] = foundBounty; //pass by reference
    return res.send(bounties)
});

// const bounties = [
//     {
//       firstName: "Darth",
//       lastName: "Vader",
//       living: false,
//       bountyAmt: 5300,
//       type: "Sith",
//       id: uuid()
//     }
//
//
//
// for (let prop in bounties){
//   console.log(person[prop])
// }

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}!`)
})
