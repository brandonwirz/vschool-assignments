import React from "react";
import "../assets/styles.css";



export default function Body(){
  // const styles= {
  //     width: "100%",
  //     height:"150px",
  //     backgroundColor: "#244169",
  //     marginTop:"50px",
  // }
    return(
      <div>
        <div className="intro">Hello.........</div>
          <div className="row">
              <img className="column" src={require("./images/ehs-thumb.png")} alt=""/>
              <img className="column" src={require("./images/almaas_thumb.png")} alt=""/>
              <img className="column" src={require("./images/lep-header.png")} alt=""/>
              <img className="column" src={require("./images/smi-sell-header.png")} alt=""/>
              <img className="column" src={require("./images/happiness_thumb.png")} alt=""/>
              <img className="column" src={require("./images/frontline_th.jpg")} alt=""/>
          </div>

          <div className="image-break"><img className="logos" src={require("./images/logos.png")} alt=""/>
              <img className="family-image" src={require("./images/dogs-w-sheree.jpg")} alt=""/>
          </div>

          <div className="bw-color-image">
            <img className="" src={require("./images/bw-color.png")} alt=""/>
          </div>
              <div id="about"><h1>About me</h1></div>

              <div id="resume"><h1>Resume</h1></div>

              <div id="contact"><h1>Contact</h1></div>


      </div>
   )
}
