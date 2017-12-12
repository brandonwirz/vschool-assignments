app.get("/bounty", (req, res) => {
          console.log(req.query)
        const searchResults = sweaters.filter((sweater)=>{
            return sweater.color === req.query.color//all red colors color = blue color = red in postman

          })
          return res.send(searchResults)
});

app.get("/bounty", (req, res) => {
          //console.log(req.query)
        const searchResults = sweaters.filter(sweater => {

          let doesMatchAll = true;

          for(prop in req.query){
            //console.log(sweater[prop].toLowerCase() === req.query[prop])
              if (sweater[prop].toLowerCase() !== req.query[prop])
                  doesMatchAll = false
          //same  if (sweater["brand"] === req.query.brand)
            //console.log(prop)
          }
        }
        return doesMatchAll
    })
      return res.send(searchResults)
});
//nike&color=red returns all
//


//all red colors color = blue color = red in postman
                                        //brand = nike
                                        //size          })
const express = require("express")
const app = express()
const port = process.env.PORT || 8000

app.get("/", (req, res)=>{
    console.log(req.query)

    const searchResults = sweaters.filter(sweater=>{

        let doesMatchAll = true

        for (prop in req.query){
            if (sweater[prop].toLowerCase() !== req.query[prop]){
                doesMatchAll = false
            }
        }
        return doesMatchAll
    })
    return res.send(searchResults)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
