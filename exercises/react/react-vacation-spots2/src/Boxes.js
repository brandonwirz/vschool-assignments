import React from "react"
import Rect from "./Rect"
import locations from "./data/locations.json"

function Boxes() {
    //
    // const boxes = [{
    //        title:"title 1",
    //        subtitle:" subtitle",
    //        info:"information1",
    //        backgroundColor:"rgb(219, 209, 226)",
    //      },{
    //        location: "Bend, Oregon",
    //        price: "$400",
    //        timeToGo: "Spring",
    //        backgroundColor: "magenta",
    //        info: "information1",
    //      },
    //    ]

 const boxes1 = locations.map((box, i)=>{
          return<Rect
                   location = {box.location}
                   price ={box.price}
                   timeToGo={box.timeToGo}
                   backgroundColor={box.backgroundColor}
                   info={box.info}
                   src={box.imgURL}
                   alt={`${box.name}`}
                   key={box.location + i}/>

   })
     return(
         <div>{boxes1}</div>
  )
}

export default Boxes;


// subTitle={box.subTitle}
// img ={box.img}
// url ={box.url}
