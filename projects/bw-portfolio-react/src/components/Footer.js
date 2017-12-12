import React from "react";
import banner_footer from './images/banner_footer.jpg';

function Footer(){
  return(
      <div className="background-footer">
          <img src={banner_footer} className="banner-footer" alt="footer" />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>

  )
}

export default Footer;
