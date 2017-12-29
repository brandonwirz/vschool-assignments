import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default function(props) {
    return (
        <div>
            {/* <Link to="/">Home</Link> */}
            <Link to="/#section-three">Section three</Link>
            <Link to="/#section-four">Section four</Link>

            {/* <Link to="/about">About</Link> */}
            <Link to="/contact">Contact</Link>
            <Link to="/service">Services</Link>
        </div>
    )
}
{/* <Link to="home-page#section-three>Section three</Link> */}
