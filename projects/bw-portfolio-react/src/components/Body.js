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
        <div className="intro">Hello, my name is Brandon,   <p>Hello my name is Brandon,  ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tristique tempus. Donec finibus, libero sodales volutpat pretium, diam lacus pulvinar mauris, sed elementum urna lorem vel diam. Fusce nisl justo, venenatis at massa in, ullamcorper iaculis urna. Donec eu condimentum tellus. Curabitur vitae augue vel nisl luctus faucibus. Duis vestibulum nulla eget turpis dictum laoreet. Proin tempus faucibus sapien a condimentum. Maecenas faucibus ultrices convallis. Phasellus volutpat urna eget tempor maximus. Proin lacus mauris, commodo et efficitur eu, dignissim interdum nisl. Donec pellentesque id nunc a aliquet. Nam ultricies eros quis elit placerat, eu commodo nunc ultrices. Donec in cursus orci. Quisque pretium porta dui eu porttitor. Sed libero turpis, finibus vel tempus luctus, facilisis et ex. Integer mollis, enim eget tincidunt vestibulum, enim libero dignissim lacus, non ullamcorper nibh nisl vel dolor. Morbi </p></div>
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
            <img src={require("./images/bw-color.png")} alt=""/>
          </div>
              <div id="about"><h1>About me</h1>
            <p>Hello my name is Brandon,  ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tristique tempus. Donec finibus, libero sodales volutpat pretium, diam lacus pulvinar mauris, sed elementum urna lorem vel diam. Fusce nisl justo, venenatis at massa in, ullamcorper iaculis urna. Donec eu condimentum tellus. Curabitur vitae augue vel nisl luctus faucibus. Duis vestibulum nulla eget turpis dictum laoreet. Proin tempus faucibus sapien a condimentum. Maecenas faucibus ultrices convallis. Phasellus volutpat urna eget tempor maximus. Proin lacus mauris, commodo et efficitur eu, dignissim interdum nisl. Donec pellentesque id nunc a aliquet. Nam ultricies eros quis elit placerat, eu commodo nunc ultrices. Donec in cursus orci. Quisque pretium porta dui eu porttitor. Sed libero turpis, finibus vel tempus luctus, facilisis et ex. Integer mollis, enim eget tincidunt vestibulum, enim libero dignissim lacus, non ullamcorper nibh nisl vel dolor. Morbi </p></div>


            <div className="bw-color-image">
              <img src={require("./images/mountains-river.jpg")} alt=""/>
            </div>
             <div id="resume"><h1>Resume</h1></div>

              {/* <div id="contact"><h1>Contact</h1></div>  */}


      </div>
   )
}
