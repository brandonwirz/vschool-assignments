import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/services">Services</Link>
        </div>
    )
}

export default Header;
