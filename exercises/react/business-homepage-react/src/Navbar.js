import React from "react";


function Navbar(props) {
    // const styles = {
    //     //background: 'url(${props.img}) no-repeat center center fixed',
    //     backgroundSize: "100% 100%"
    // }
    return (
        <div>
            <ul className="nav">
                <li><a href="#">Protest</a></li>
                <li><a href="#">Globalization</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="line"></div>
        </div>
    )
};


// <img className="navItem" src={require("../logo.jpg")}/>

 export default Navbar;
