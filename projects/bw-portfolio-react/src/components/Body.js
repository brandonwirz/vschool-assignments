import React from "react";
import "./c-styles.css";

export default function Body(){
    return(
      <div className="row">
        <img className="column" src={require("./images/almaas_thumb.png" ) } alt=""/>
          {/* <div className="column" src={require("./images/almaas_thumb.png")}></div> */}
          <img className="column" src={require("./images/almaas_thumb.png")} alt=""/>
      </div>
  )
}
  {/* <img className="main-product" src={require("./assets/zinn-book.jpg")}/> */}
