import React from "react";
import banner_header from './images/banner_header.jpg';
import "../assets/styles.css";
function Header(){
  return(
      <div className="background-header">
          <img src={banner_header} className="banner-header" alt="header" />
             <div className="under-header">
             </div>
             <nav>
                   <ul>
                     <li>Portfolio</li>
                     <li>About me</li>
                     <li>Resume</li>
                     <li>Contact</li>
                     <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                     <li><i class="fa fa-github" aria-hidden="true"></i></li>
                   </ul>
             </nav>
             <div className="header-image"></div>

          </div>
      )
}

export default Header;
