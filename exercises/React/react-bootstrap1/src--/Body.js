import React from "react";
import Thumbnails from "./Thumbnails.js";
import Rectangle from "./Rectangle.js"

function Body(props){


    return (
        <div>
            <Thumbnails />
          <Rectangle backGroundColor= "orange" description="first box" />
          <Rectangle backGroundColor= "violet" description="second" />
          <Rectangle backGroundColor= "red" description="third" />
          <Rectangle backGroundColor= "blue" description="and so on" />
        </div>
    )
}

export default Body;
