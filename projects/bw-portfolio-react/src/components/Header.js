import React from "react";
import banner_header from './images/banner_header.jpg';
import { Switch, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import 'font-awesome/css/font-awesome.min.css';
import "../assets/styles.css";

    function Header() {
          const styles = {
             color:"#259cdb"
    }

    return(
       <div className="background-header">
              <nav className ="topnav" id="myTopnav">
                    <Link to="/#about">About</Link>
                    <Link to="/#resume">Resume</Link>
                    <Link to="/#contact">Contact</Link>
                    <Link to="/"><i className="fa fa-linkedin fa-lg"></i></Link>
                    <Link to="/"><i className="fa fa-github fa-lg"></i></Link>
                    <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
              </nav>
        <div className="nav-container">
              </div>
                    <img className="name" src={require("./images/bw-photo-name.png")} alt="bw photo and title"/>
                    <img src={banner_header} className="banner-header" alt="header" />
                    <div className="header-image"></div>
              </div>
    )

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
}

export default Header;


              /* <Switch>
                <Route exact path="/" component={body}/>
                <Route path="/about" component={about}/>
                <Route path="/contact" component={contact}/>
            </Switch> */
