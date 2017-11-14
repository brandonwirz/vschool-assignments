import React from "react"
import Rect from "./Rect"
import locations from "./data/locations.json"
function Boxes() {

    // const boxes = [{
    //  //       title:"title 1",
    //  //       subtitle:" subtitle",
    //  //       info:"information1",
    //  //       backgroundColor:"rgb(219, 209, 226)",
    //  //     },{
    //
    //        location: "Bend, Oregon",
    //        price: "$400",
    //        timeToGo: "Spring",
    //        backgroundColor: "magenta",
    //        info: "information1",
    //
    //      },{
    //        location: "Africa",
    //        price: "$2900",
    //        timeToGo: "Winter",
    //        backgroundColor: "pink",
    //        info: "information2"
    //      },{
    //        location: "Bahamas",
    //        price: "$900",
    //        timeToGo: "Fall",
    //        backgroundColor: "green",
    //        info: "information3"
    //      },{
    //        location: "Europe",
    //        price: "$1900",
    //        timeToGo: "Winter",
    //        backgroundColor: "orange",
    //        info: "information4"
    //      }
    //
    //    ]

         const boxesJSX1 = locations.map((box)=>{
             return <Rect
                 location = {box.location}
                 // subTitle={box.subTitle}
                 price ={box.price}
                 img ={box.img}
                 // url ={box.url}
                 timeToGo={box.timeToGo}
                 backgroundColor={box.backgroundColor}
                 info={box.info}

               />

         })

         return(
             <div>{boxesJSX1}</div>
         )
       }

export default Boxes;
