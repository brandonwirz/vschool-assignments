
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
        <div className="intro"><p>Hello and welcome to my website. My name is Brandon I have over 10 years experience as a graphic designer/web designer and I have recently graduated from V School Full Stack JavaScript web development program. Check out some of my design work below and see my coding examples on github.<a href="https://github.com/brandonwirz" target="_blank"> </a></p></div>
          <div className="row">
            <div id="ehs"><img className="column" src={require("./images/ehs-thumb.png")} alt=""/></div>
              <img className="column" src={require("./images/almaas_thumb.png")} alt=""/>
              <img className="column" src={require("./images/lep-header.png")} alt=""/>
              <img className="column" src={require("./images/smi-sell-header.png")} alt=""/>
              <img className="column" src={require("./images/happiness_thumb.png")} alt=""/>
              <img className="column" src={require("./images/frontline_th.jpg")} alt=""/>
          </div>

          <div className="image-break"><img className="logos" src={require("./images/logos.png")} alt=""/>
                </div>
          <div className="family-image"><img className="family-image" src={require("./images/dogs-w-sheree.jpg")} alt=""/></div>

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

            <div className="">
                 <img className="mtn-pic-break" src={require("./images/mountains-river.jpg")} alt=""/>
            </div>

             <div id="resume">
                 <h1>Resume</h1>
             </div>

             <div className="resume">
                 <img className="" src={require("./images/B-Wirz-resume.svg")} alt=""/>
             </div>
      </div>
   )
}



























// import React,{Component} from "react";
// import "../assets/styles.css";
// import Modal, {closeStyle} from 'simple-react-modal';
//
//   export default class Body extends Component{
//
//     constructor(){
//       super()
//       this.state = {}
//     }
//
//     show(){
//       this.setState({show: true})
//     }
//
//     close(){
//       this.setState({show: false})
//     }
//
//     render(){
//         const closeStyle = {
//             "display":"block",
//             "width": "500px"
//         }
//     return (
//             <div>
//             <div className="intro"><p>Hello and welcome to my website. I have over 10 years experience as a graphic designer/web designer and I have recently graduated from V School Full Stack JavaScript web development program. Check out some of my design work below and see my coding examples on github.<a href="https://github.com/brandonwirz" target="_blank"> </a></p></div>
//               <div className="row">
//                   <img id="almaas" className="column" src={require("./images/almaas_thumb.png")} alt=""/>
//                   <img className="column" src={require("./images/lep-header.png")} alt=""/>
//                   <img className="column" src={require("./images/smi-sell-header.png")} alt=""/>
//                   <img className="column" src={require("./images/happiness_thumb.png")} alt=""/>
//                   <img className="column" src={require("./images/frontline_th.jpg")} alt=""/>
//               </div>
//
//               <div className="image-break"><img className="logos" src={require("./images/logos.png")} alt=""/></div>
//               <div className="family-image"><img className="family-image" src={require("./images/dogs-w-sheree.jpg")} alt=""/></div>
//
//               <div id="about" className="bw-color-image">
//                 <img src={require("./images/bw-color.png")} alt=""/>
//               </div>
//                   <div id="about"><h1>About me</h1>
//                         <p className="about-me">Hello my name is Brandon, I am a highly accomplished Web Designer/Developer with more than 7 years experience. Expertise in
//                         all facets of visual design, responsive design and development. Instrumental in streamlining and
//                         improving processes, enhancing productivity, implementing technology and design and development
//                         solutions. Technical proficiency in web development, graphic design, responsive design, art direction,
//                         branding, video editing, wireframing and social media. Ability to learn new software quickly. In early
//                          January I will be graduating from V School Full Stack JavaScript Web Development program.<br/><br/>
//                         Curriculum: HTML5, CSS, Responsive Web Design, Bootstrap, JavaScript ES6, Node.js, express, mongooseDb, mocha, JS Ajax, jQuery, JSON, React, Redux, CRUD and working with API’s/Postman.</p>
//                   </div>
//
//                 <div className="">
//                     <img className="mtn-pic-break" src={require("./images/mountains-river.jpg")} alt=""/>
//                 </div>
//
//                  <div id="resume"><h1>Resume</h1></div>
//                  <div className="resume">
//                     <img className="" src={require("./images/B-Wirz-resume.svg")} alt=""/>
//                  </div>
//
//         <button onClick={this.show.bind(this)}>Open Modal</button>
//             <Modal
//             className="test-class" //this will completely overwrite the default css completely
//             style={{background: 'whitesmoke', width:"500px","height":"500px", "margin": "0 auto"}} //overwrites the default background
//             // containerStyle={{background: 'blue',"display":"block",
//             // "width": "500px"}} //changes styling on the inner content area
//
//             containerClassName="test"
//             closeOnOuterClick={true}
//             show={this.state.show}
//             onClose={this.close.bind(this)}>
//
//              <a style={closeStyle} onClick={this.close.bind(this)}>XXXXX
//              <div>hey, click outside of me to close me!</div></a>
//              </Modal>
//          </div>
//       )
//
//     }
//   }
