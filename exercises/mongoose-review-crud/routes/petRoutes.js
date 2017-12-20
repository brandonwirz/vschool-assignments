const express = require("express");
const petRoutes = express.Router();
const Pet = require("../models/pet");
//console.log("something happened");

petRoutes.route("/")
    .get((req, res) => {
      Pet.find((err, pets) =>{
         if (err) return res.status(500).send(err);
          res.send(pets);
    });
})

.post((rew, res)=>{
    const newPet = new Pet(req.body)
    newPet.save((err) => {
      if (err) return res.status(500).send(err);
       res.staus(201).send(newPet);
    });
})


petRoutes.route("/:id")/// id is var something
    .get((req, res) =>{//findById or findOne
       Pet.findOne({_id: req.params.id}, (err, pet) => {
             if (err) return res.status(500).send(err);
             res.send(pet);
       })
    })
petRoutes.route("/:id")
    .get((req, res) =>{//findById or findOne
       Pet.findById(req.params.id, (err, pet) => {
             if (err) return res.status(500).send(err);
             res.send(pet);
        });
    });

.put((req, res) =>{
    Pet.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, pet) => {
        if (err) return res.status(500).send(err);
        res.send(pet);
    });
})

//localhost:7000/Pets/ID
.delete((req, res) =>{
    Pet.findByIdAndRemove(req.params.id, (err, pet) => {
          if (err) return res.status(500).send(err);
          res.send({message: "Successfully removed pet", pet})
    })
})



module.exports = petRoutes
