import React from "react";
import banner_header from './images/banner_header.jpg';
import { Switch, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import 'font-awesome/css/font-awesome.min.css';

import "../assets/styles.css";
function Header(){
  const styles= {
    color:"#259cdb"
  }

  return(

      <div className="background-header">
        <div className="nav-container">
            <img className="name" src={require("./images/bw-photo-name.png")} alt=""/>
        </div>


          <img src={banner_header} className="banner-header" alt="header" />

          <nav id="top-nav">
                <Link to="/#about">About</Link>
                <Link to="/#resume">Resume</Link>
                <Link to="/#contact">Contact</Link>
                <Link to="/"><i className="fa fa-linkedin fa-lg"></i></Link>
                <Link to="/"><i className="fa fa-github fa-lg"></i></Link>
                <a className="icon" onclick="myFunction()">&#9776;</a>
          </nav>
             {/* <div className="under-header">
             </div> */}

             {/* <img className="main" src={require("./images/dogs-w-sheree.jpg")} alt=""/> */}

             <div className="header-image"></div>

          </div>

      )
      return(
          function myFunction() {
                var x = document.getElementById("nav");
                if (x.className === "nav") {
                    x.className += " responsive";
                } else {
                    x.className = "nav";
                }
            }
      )
}

export default Header;


              /* <Switch>
                <Route exact path="/" component={body}/>
                <Route path="/about" component={about}/>
                <Route path="/contact" component={contact}/>
            </Switch> */
