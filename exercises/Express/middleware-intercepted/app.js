
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser")

// app.get("/", (req, res) => {
//   console.log("hey")
//   res.send("<h1>hey</h1>")
// })

// app.get("/", (req, res) => {
//   // console.log("hey")
//   return res.send((num++).toString())
//    // num ++
// })


 //localHost:3000/nice/awesome in postman
// app.get("/nice/:quote/", (req, res) => {
//   // console.dir(req.params)
//   return res.send(req.params.quote)
// })

//localhost:3000/blogs/id
// app.get("/blogs/:id/", (req, res) => {
//   // console.dir(req.params)
//   return res.send(`You put ${req.params.id} as the URL`)
// })


//localHost:3000/search?term=weasel&other=ferret
//queries
// app.get("/search", (req, res) => {
//    console.dir(req.query)
//   return res.send(`You put ${req.params.id} as the URL`)
// })

// const animals = [];
// app.get("/animals", (req, res) => {
//    // console.dir(req.query)
//   return res.send(animals)
// })
//
// const bodyParser = require("body-parser")
// app.use(bodyParser.json())
//
// //post
// app.post("/animals", (req, res) => {
//   console.log(req.body)
//   animals.push(req.body)
//   return res.send({message: "here is your animal object", object: req.body})
// })

//sloppy
// app.get("/:value/", (req, res) => {
//   // console.dir(req.params)
//   return res.send((num += Number(req.params.value)).toString())
// })//11



// app.get("/mean", (req, res) => {
//   return res.send("Your lame")
// })


let num = 1;
app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
})
//localHost:3000



//
// const express = require("express")
// const app = express()
// const port = 3000
// const bodyParser = require("body-parser")
//
// app.use(bodyParser.json())
//
// const animals = []
//
// app.get("/animals", (req, res)=>{
//     return res.send(animals);
// });
//
// app.post("/animals", (req, res)=>{
//     animals.push(req.body)
//     return res.send({message: "here is your new animal", object: req.body});
// })
//
// app.listen(port, ()=>{
//     console.log(`App is listening on port ${port}!`)
// })
