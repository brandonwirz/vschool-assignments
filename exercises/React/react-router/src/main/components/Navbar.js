import React from "react";
import { Link } from "react-router-dom";
export default function(props) {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/service">Services</Link>
        </div>
    )
}
