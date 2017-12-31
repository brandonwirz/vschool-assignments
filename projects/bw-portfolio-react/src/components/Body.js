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
        <div className="intro">Hello and welcome to my website. My name is Brandon I have over 10 years experience as a graphic designer/web designer and I have recently graduated from V School Full Stack JavaScript web development program. Check out some of my design work below and see my coding examples on github.<a href="https://github.com/brandonwirz" target="_blank"> </a></div>
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

          <div id="about" className="bw-color-image">
            <img src={require("./images/bw-color.png")} alt=""/>
          </div>
              <div id="about"><h1>About me</h1>
                <p className="about-me">Hello my name is Brandon, I am a highly accomplished Web Designer/Developer with more than 7 years experience. Expertise in
                all facets of visual design, responsive design and development. Instrumental in streamlining and
                improving processes, enhancing productivity, implementing technology and design and development
                solutions. Technical proficiency in web development, graphic design, responsive design, art direction,
                branding, video editing, wireframing and social media. Ability to learn new software quickly. In early
                 January I will be graduating from V School Full Stack JavaScript Web Development program.<br/><br/>
                Curriculum: HTML5, CSS, Responsive Web Design, Bootstrap, JavaScript ES6, Node.js, express, mongooseDb, mocha, JS Ajax, jQuery, JSON, React, Redux, CRUD and working with API’s/Postman.</p>
              </div>

          <pre>



          </pre>
            <div className="">
              <img className="mtn-pic-break" src={require("./images/mountains-river.jpg")} alt=""/>
            </div>


             <div id="resume"><h1>Resume</h1></div>
             <div className="resume">
               <img className="" src={require("./images/B-Wirz-resume.svg")} alt=""/>
             </div>
              {/* <div id="contact"><h1>Contact</h1></div>  */}


      </div>
   )
}
