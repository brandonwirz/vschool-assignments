import React from "react";

function Footer() {
    return (
        <div className="footer">
          <img className="social" src={require("./assets/fb.png")} alt={"facebook"}/>
          <img className="social" src={require("./assets/twitter.png")} alt={"twitter"}/>
          <img className="social" src={require("./assets/youtube.png")} alt={"youtube"}/>
          <img className="social" src={require("./assets/pin.png")} alt={"pinterest"}/>
          <img className="social" src={require("./assets/love.png")} alt={"love"}/>
        </div>
    )
};

export default Footer;
