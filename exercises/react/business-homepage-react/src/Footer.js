import React from "react";

function Footer() {
    return (
        <div className="footer">
          <img className="social"src={require("./assets/fb.png")}/>
          <img className="social"src={require("./assets/twitter.png")}/>
          <img className="social"src={require("./assets/youtube.png")}/>
          <img className="social"src={require("./assets/pin.png")}/>
          <img className="social"src={require("./assets/love.png")}/>
        </div>
    )
};

export default Footer;
