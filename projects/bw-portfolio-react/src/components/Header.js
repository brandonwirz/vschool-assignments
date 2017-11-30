import React from "react";
import banner_header from '../images/banner_header.jpg';

function Header(){
  return(
      <div className="background-header">
          <img src={banner_header} className="banner_header" alt="header" />
          <div className="under-header"></div>
      </div>

  )
}

export default Header;
