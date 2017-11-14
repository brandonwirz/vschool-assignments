import React from "react";
import Thumb from "./Thumb";
import {Col, Thumbnail, Button} from "react-bootstrap";

function Thumbnails(props) {

    return (
      <div>
          <Thumb backGroundColor= "pink" title ="about" description = "blah blah blah"/>
          <Thumb backGroundColor= "green" title ="info" description = "custom description"/>
          <Thumb backGroundColor= "blue" title ="products" description = "description"/>
      </div>
    )
};

export default Thumbnails;
