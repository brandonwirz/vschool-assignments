// const express = require("express")
// const app = express()
// // const morgan = require("morgan")
// const port = process.env.PORT || 8000


// const guitars = [
//     {
//       name: "Ibanez",
//       color: "white",
//       price: 2000
//     },
//     {
//      name: "Fender",
//      color: "sunburst",
//      price: 1500
//     },
//     {
//      name: "Kramer",
//      color: "yellow",
//      price: 1000
//     },
//     {
//      name: "Dean",
//      color: "black",
//      price: 1100
//     },
//     {
//      name: "BC Rich",
//      color: "black",
//      price: 1400
//     },
//   ];
  // app.get("/", (req, res) => {
  //         console.log(req.query)
  //         const searchResults = guitars.filter((guitar)=>{
  //             return guitar.color === req.query.color
  //             //all red colors color = blue color = red in postman
  //
  //           })
  //           return res.send(searchResults)
  // });
  //
  // app.get("/guitar", (req, res)=>{
  //     console.log(req.query)
  //
  //     const searchResults = guitars.filter(guitar=>{
  //
  //         let doesMatchAll = true
  //
  //         for (prop in req.query){
  //             if (guitar[prop].toLowerCase() !== req.query[prop]){
  //                 doesMatchAll = false
  //             }
  //         }
  //
  //         return doesMatchAll
  //     })
  //     return res.send(searchResults)
  // })






  const express = require("express");
  const app = express();
  const bodyParser = require('body-parser');
  const port = process.env.PORT || 8000


  let guitars = [
      {
        name: "Ibanez",
        color: "white",
        price: "2000"
      },
      {
       name: "Fender",
       color: "sunburst",
       price: "1500"
      },
      {
       name: "Kramer",
       color: "yellow",
       price: "1000"
      },
      {
       name: "Dean",
       color: "black",
       price: "1100"
      },
      {
       name: "BC Rich",
       color: "black",
       price: "1400"
      },
    ];


  app.get("/guitar", (req, res) => {
      console.log(req.query)

      let resp = guitars.filter((guitar,i) => {
          let allMatch = true
          for (key in req.query) {
              if (guitars[i][key] !== req.query[key]) {
                  return false
              }
          }
          return allMatch
      })
      // In Postman
      //localhost:8000/guitar?name=Ibanez
      //localhost:8000/guitar?color=black
      //localhost:8000/guitar?price=1500

      let safety = Object.keys(req.query)
      !safety.length ? resp.push(...guitars) : null
      !resp.length ? resp.push({msg: "that item or search parameter is not available"}) : null


      res.send(resp)

  })
  app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
  })
