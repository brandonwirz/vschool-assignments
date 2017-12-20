const express = require("express");
const gunRoutes = express.Router();
const Gun = require("../models/inventory");
//console.log("something happened");

//GET
gunRoutes.route("/")
    .get((req, res) => {
      Gun.find((err, guns) =>{
         if (err) return res.status(500).send(err);
          res.send(guns);
    });
})
//POST
.post((req, res)=>{
    const newGun = new Gun(req.body)
    newGun.save((err) => {
      if (err) return res.status(500).send(err);
       res.status(201).send(newGun);
    });
})

gunRoutes.route("/:id")
    .get((req, res) =>{//findById or findOne
       Gun.findOne({_id: req.params.id}, (err, gun) => {
             if (err) return res.status(500).send(err);
             res.send(gun);
       })
    })


//PUT
.put((req, res) =>{
    Gun.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, gun) => {
        if (err) return res.status(500).send(err);
        res.send(gun);
    });
})

//DELETE
//localhost:7000/Guns/ID
.delete((req, res) =>{
    Gun.findByIdAndRemove(req.params.id, (err, gun) => {
          if (err) return res.status(500).send(err);
          res.send({message: "Successfully removed gun", gun})
    })
})

module.exports = gunRoutes;
